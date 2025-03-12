import { Button } from "@/components/ui/button";
import { Chrome, Download, Terminal } from "@geist-ui/icons";
import { CaptionsOff } from "lucide-react";
import Link from "next/link";

import React from "react";

const WindowDownloadPage = () => {
  return (
    <div className=" flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <p>Download Window Agent</p>
        <div className="border-1  p-4 rounded-lg">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
            <span>
              <Download />
            </span>
            <span>Step 1: Download the NetAI_Subscriber ZIP</span>
          </h3>
          <Button variant={"secondary"}>Download User Experience Agent</Button>
        </div>
        <div className="border-1  p-4 rounded-lg">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
            <span>
              <Terminal></Terminal>
            </span>
            <span>
              Step 2: Unzip the NetAI_Subscriber and follow below described
              steps:
            </span>
          </h3>
          <ol className="list-decimal pl-5">
            <li>
              Navigate to the folder where you downloaded the NetAI_Subscriber
              ZIP
            </li>
            <li>
              Extract the contents of the ZIP file to a desired location on your
              computer.
            </li>
            <li>
              Inside the extracted folder, locate and run the
              NetAI_Subscriber.exe file.
            </li>
            <li>
              Provide Credentials:
              <ul className="list-disc pl-4">
                <li>
                  The application will prompt you to enter a username and
                  password.
                </li>
                <li>Enter the username and password registered with NetAI.</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="border-1  p-4 rounded-lg">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
            <span>
              <Chrome></Chrome>
            </span>
            <span>Step 3: Install Browser Extension</span>
          </h3>

          <p>
            1. Visit the{" "}
            <a
              className="text-[#34EFF]"
              href="https://chromewebstore.google.com/detail/netai-subscriber-agent-mo/bkokmafgcloniipejaahkkliiephhppb?hl=en-GB&utm_source=ext_sidebar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Browser Extension Link
            </a>{" "}
            to install the required extension on your browser.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p>Uninstall Window Agent</p>
        <div className="border-1 p-4 rounded-lg">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
            <span>
              <CaptionsOff />
            </span>
            <span>Step 1: Uninstall NetAI_Subscriber Service</span>
          </h3>
          <ol className="list-decimal pl-4">
            <li>
              Open Windows Settings (<kbd>Windows</kbd> key + <kbd>I</kbd>) &gt;
              Apps &gt; Apps & features
            </li>
            <li>
              Find NetAI_Subscriber App in list, click three dots (...) next to
              it
            </li>
            <li>Click "Uninstall" and follow on-screen prompts</li>
          </ol>
        </div>
        <div className="border-1  p-4 rounded-lg">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
            <span>
              <CaptionsOff />
            </span>
            <span>Step 2: Remove Browser Extension</span>
          </h3>
          <ol className="list-decimal pl-4">
            <li>
              Open your browser and go to the Extensions/Manage Add-ons page.
            </li>
            <li>Locate the installed extension added during installation.</li>
            <li>
              Click the "Remove" or "Uninstall" button to delete the extension.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WindowDownloadPage;
