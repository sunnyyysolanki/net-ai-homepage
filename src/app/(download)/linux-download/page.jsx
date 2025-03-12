import { Button } from "@/components/ui/button";
import { Chrome, Download, Terminal } from "@geist-ui/icons";
import { CaptionsOff } from "lucide-react";
import Link from "next/link";

import React from "react";

const LinuxDownloadPage = () => {
  return (
    <div className=" flex flex-col gap-10 ">
      <div className="flex flex-col gap-3">
        <p>Download Linux Agent</p>
        <div className="border-1  p-4 rounded-lg">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
            <span>
              <Download />
            </span>
            <span>Step 1: Download the Self-Service Run Script</span>
          </h3>
          <Button variant={"secondary"}>Download User Experience Agent</Button>
        </div>
        <div className="border-1 p-4 rounded-lg">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
            <span>
              <Terminal></Terminal>
            </span>
            <span>Step 2: Grant Permissions and Run the Script</span>
          </h3>
          <div className="flex flex-col gap-2">
            <p>
              1. Navigate to the Script Folder: Open the directory where the
              Self-Service script is downloaded.
            </p>
            <p>Run the Following Commands:</p>
            <pre className="bg-muted p-2 rounded-md mt-1 overflow-x-auto w-fit">
              <code>{`sudo chmod +x netai_self_service_install.sh
./netai_self_service_install.sh`}</code>
            </pre>

            <p>2. Provide Credentials:</p>
            <ul className="list-disc pl-5 ml-4">
              <li>The script will prompt for a username and password.</li>
              <li>Enter the username and password registered with NetAI.</li>
            </ul>
          </div>
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
              href="https://chromewebstore.google.com/detail/netai-subscriber-agent-mo/bkokmafgcloniipejaahkkliiephhppb?hl=en-GB&utm_source=ext_sidebar"
              target="_blank"
              className="text-[#34EFF7]"
              rel="noopener noreferrer"
            >
              Browser Extension Link
            </a>{" "}
            to install the required extension on your browser.
          </p>
        </div>
      </div>
      {/* uninstall */}
      <div className="flex flex-col gap-3">
        <p>Uninstall Linux Agent</p>
        <div className="border-1  p-4 rounded-lg">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
            <span>
              <CaptionsOff />
            </span>
            <span>Step 1: Remove Installed Components</span>
          </h3>
          <div className="flex flex-col gap-2">
            <p>1. To remove Docker containers execute the command below</p>
            <pre className="bg-muted p-2 rounded-md mt-1 overflow-x-auto w-fit">
              <code>sudo docker rm -f netai-linux-agent</code>
            </pre>

            <p>2. To remove a Docker image, execute the command below.</p>
            <pre className="bg-muted p-2 rounded-md mt-1 w-full overflow-x-auto whitespace-pre-wrap ">
              <code>
                for tag in $(sudo docker images | grep
                netaidev/netai-linux-agent | awk
                {"{print $2}"}); do sudo docker rmi
                netaidev/netai-linux-agent:$tag; done
              </code>
            </pre>
          </div>
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

export default LinuxDownloadPage;
