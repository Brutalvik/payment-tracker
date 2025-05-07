"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Alert } from "@heroui/alert";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Progress } from "@heroui/progress";
import { Search } from "lucide-react";
import { Spinner } from "@heroui/react";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

interface InvoiceData {
  invoiceNumber: string;
  status: string;
  paymentFrom: string;
  paymentTo: string;
  paymentDate: string;
  dueDate: string;
  amount: string;
  paymentMethod: string;
  accountLast4Digits: string;
  estimatedArrival: string;
  billCreatedOn: string;
}

const GET_INVOICE_URL =
  process.env.NEXT_PUBLIC_GOOGLE_CLOUD_FUNCTION_GET_INVOICE_DATA;

const TrackerPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Initialize router

  // Progress bar stages and status mapping
  const stages = [
    { label: "Draft Payment", value: true },
    { label: "Payment Scheduled", value: true },
    { label: "Payment Initiated", value: true },
    { label: "Payment Sent", value: true },
    { label: "PAID", value: true },
  ];

  const statusMap: Record<string, number> = {
    "Draft Payment": 0,
    "Payment Scheduled": 25,
    "Payment Initiated": 50,
    "Payment Sent": 75,
    PAID: 100,
  };

  const getProgressValue = (status: string) => {
    return statusMap[status] || 0;
  };

  const handleSearch = async () => {
    if (!trackingNumber) {
      setError("Please enter a tracking number.");
      return;
    }

    if (!/^\d{14}$/.test(trackingNumber)) {
      setError("Tracking number must be 14 digits.");
      return;
    }

    setError(null);
    setLoading(true);

    // Update the URL with the tracking number
    router.push(`/tracker?trackingNumber=${trackingNumber}`);

    try {
      // Cloud Function.
      const cloudFunctionUrl = `${GET_INVOICE_URL}${trackingNumber}`;

      const response = await fetch(cloudFunctionUrl);

      if (!response.ok) {
        if (response.status === 404) {
          setError("Invoice not found. Please check your tracking number.");
        } else {
          setError(
            `Failed to fetch data: ${response.status} ${response.statusText}`
          );
        }
        setInvoiceData(null);
        return;
      }

      const data: InvoiceData = await response.json();
      setInvoiceData(data);
    } catch (err: any) {
      setError("Failed to fetch invoice data: " + err.message);
      setInvoiceData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check for trackingNumber in query parameters on initial load
    const urlParams = new URLSearchParams(window.location.search);
    const trackingNumberParam = urlParams.get("trackingNumber");
    if (trackingNumberParam) {
      setTrackingNumber(trackingNumberParam);
    }
  }, []);

  useEffect(() => {
    if (trackingNumber) {
      setLoading(true);
      setError(null);
      // Fetch invoice data when tracking number changes
      handleSearch();
    }
  }, [trackingNumber]);
  

  return (
    <>
      <div className="flex  justify-center sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Track Your Payments
            </h2>
            <p className="mt-2 text-sm text-default-500">
              Enter your 14-digit tracking number to get the latest status of
              your invoice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4">
              <Input
                type="text"
                placeholder="Enter 14-digit tracking number"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className={cn(
                  "w-full",
                  error &&
                    "border-red-500 focus:ring-red-500 focus:border-red-500",
                  loading && "opacity-50 cursor-not-allowed" // Style for loading state
                )}
                disabled={loading} // Disable input during loading
                aria-label="Tracking Number"
                aria-describedby="tracking-number-input"
              />
              <Button
                onClick={handleSearch}
                disabled={loading} // Disable button during loading
                className={cn(
                  "min-w-[100px]", // Ensure button has a minimum width
                  loading ? "opacity-70 cursor-not-allowed" : "" // Style for loading
                )}
                aria-labelledby="Search"
              >
                {loading ? (
                  <Spinner className="px-10" size="sm" />
                ) : (
                  <>
                    <Search className="mr-2 h-10 w-10" />
                    Search
                  </>
                )}
              </Button>
            </div>
            {error && (
              <Alert variant="solid">
                <strong>Error</strong>
                <span>{error}</span>
              </Alert>
            )}
          </motion.div>

          {invoiceData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <div className="flex justify-between items-start w-full">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Invoice #{invoiceData.invoiceNumber}
                    </h3>
                    <h5 className="text-sm text-default-500">
                      Status: {invoiceData.status}
                    </h5>
                  </div>
                </CardHeader>
                <CardBody className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-default-500">
                        Payment From:
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        {invoiceData.paymentFrom}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-default-500">
                        Payment To:
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        {invoiceData.paymentTo}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-default-500">
                        Payment Date:
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        {invoiceData.paymentDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-default-500">
                        Due Date:
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        {invoiceData.dueDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-default-500">
                        Amount:
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        {invoiceData.amount}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-default-500">
                        Payment Method:
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        {invoiceData.paymentMethod}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-default-500">
                        Account Last 4 Digits:
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        {invoiceData.accountLast4Digits}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-default-500">
                        Estimated Arrival:
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        {invoiceData.estimatedArrival}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-default-500">
                        Bill Created On:
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        {invoiceData.billCreatedOn}
                      </p>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="space-y-4">
                  <div className="flex justify-between items-start w-full gap-2">
                    {stages?.map((stage, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center w-1/4"
                      >
                        <Progress
                          value={
                            getProgressValue(invoiceData.status) >=
                            getProgressValue(stage.label)
                              ? 100
                              : 0
                          }
                          className={cn(
                            "h-2 w-full",
                            index > 0 && "ml-2", // Add left margin for spacing
                            "bg-default-200"
                          )}
                          aria-label="Progress Bar"
                        />
                        <span className="text-xs mt-2 text-center text-default-500">
                          {stage.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <Footer />
      </div>
    </>
  );
};

export default TrackerPage;
