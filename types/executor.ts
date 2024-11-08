import { Browser } from "puppeteer";

export type Environment = {
  browser?: Browser;
  // phases with phaseId as key
  phases: Record<
    string, //key: phaseid
    {
      inputs: Record<string, string>;
      outputs: Record<string, string>;
    }
  >;

  //   can do like this also but i am doing as above
  //   phases: {
  //     [key: string]: {
  //       inputs: Record<string, string>;
  //       outputs: Record<string, string>;
  //     };
  //   };
};
