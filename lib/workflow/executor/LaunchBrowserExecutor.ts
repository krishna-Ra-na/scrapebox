import { waitFor } from "@/lib/helper/waitFor";
import puppeteer from "puppeteer";
import { Environment } from "@/types/executor";

export async function LaunchBrowserExecutor(
  environment: Environment
): Promise<boolean> {
  try {
    console.log("@@ENV", environment);

    const browser = await puppeteer.launch({
      headless: false,
    });
    await waitFor(3000);
    await browser.close();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
