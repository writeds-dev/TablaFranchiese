declare global {
    interface Window {
      fbq: (...args: any[]) => void;
    }
  }
  export {};
  

  declare global {
     interface Window {
      acsbJS?: {
        init: () => void;
      };
    }
  }