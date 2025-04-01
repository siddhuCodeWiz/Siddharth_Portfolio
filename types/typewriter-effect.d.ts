// types/typewriter-effect.d.ts
// Place this file in a 'types' folder at the root of your project

declare module 'typewriter-effect' {
    import React from 'react';
  
    export interface TypewriterOptions {
      strings?: string[];
      autoStart?: boolean;
      loop?: boolean;
      delay?: number;
      deleteSpeed?: number;
      pauseFor?: number;
      cursor?: string;
      devMode?: boolean;
      wrapperClassName?: string;
      cursorClassName?: string;
      stringSplitter?: (text: string) => string[];
      onCreateTextNode?: (character: string, textNode: Text) => Text;
      onRemoveNode?: (node: Node) => void;
    }
  
    export interface TypewriterComponentProps {
      onInit?: (typewriter: any) => void;
      options?: TypewriterOptions;
    }
  
    declare const Typewriter: React.FC<TypewriterComponentProps>;
    
    export default Typewriter;
  }