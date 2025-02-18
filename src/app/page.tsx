/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import UserForm from "../components/user_form";
import UserEmail from "../components/user_email";
import Waiting from "../components/waiting";
import GeneratedNames from "../components/generated_names";
import useRequestContext from "../hooks/use_request_context";
import ServerHomeLayout from "../components/server_home_layout"; // Import server component

const HomePage = () => {
  const [step, setStep] = useState<number>(0);
  const { loading, setLoading, setStreamedData, streamedData, formData, setIsComplete } = useRequestContext();

  const allComponents = [
    <UserForm setStep={setStep} key="form" />,
    <UserEmail step={step} setStep={setStep} key="email" />,
    <Waiting step={step} setStep={setStep} key="waiting" />,
    <GeneratedNames setStep={setStep} key="generated" />,
  ];

  useEffect(() => {
    if (!loading && streamedData.length < 1) return;

    const queryParams = new URLSearchParams(formData as unknown as Record<string, string>).toString();
    const eventSource = new EventSource(`http://localhost:3900/generate?${queryParams}`);

    setIsComplete("start");

    eventSource.onmessage = (event) => {
      setLoading(false);
      if (event.data === "[DONE]") {
        setIsComplete("finish");
        eventSource.close();
        return;
      }

      if (event.data.startsWith("ERROR:")) {
        eventSource.close();
      } else {
        if (event.data !== "undefined") setStreamedData((prevData) => prevData + event.data);
      }
    };

    eventSource.onerror = () => {
      eventSource.close();
      setLoading(false);
      setIsComplete("finish");
    };

    return () => {
      eventSource.close();
      setLoading(false);
      setIsComplete("finish");
    };
  }, [loading]);

  return (
    <ServerHomeLayout>
      {allComponents[step]} {/* Only the dynamic part changes */}
    </ServerHomeLayout>
  );
};

export default HomePage;
