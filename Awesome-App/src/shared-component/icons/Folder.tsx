import * as React from "react";
import { SvgPropTypes } from "./iconType";



     
export const FolderIcon = (props: SvgPropTypes): JSX.Element => {
  return (
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
       <path d="M28.8933 19.0667L28.36 25.7333C28.16 27.7733 28 29.3333 24.3867 29.3333H7.61334C4 29.3333 3.84 27.7733 3.64 25.7333L3.10667 19.0667C3 17.96 3.34667 16.9333 3.97334 16.1467C3.98667 16.1333 3.98667 16.1333 4 16.12C4.73334 15.2267 5.84 14.6667 7.08 14.6667H24.92C26.16 14.6667 27.2533 15.2267 27.9733 16.0933C27.9867 16.1067 28 16.12 28 16.1333C28.6533 16.92 29.0133 17.9467 28.8933 19.0667Z" stroke="#546FFF" strokeWidth="1.5" strokeMiterlimit="10"/>
       <path d="M4.66669 15.24V8.37333C4.66669 3.84 5.80002 2.70667 10.3334 2.70667H12.0267C13.72 2.70667 14.1067 3.21333 14.7467 4.06666L16.44 6.33333C16.8667 6.89333 17.12 7.24 18.2534 7.24H21.6534C26.1867 7.24 27.32 8.37333 27.32 12.9067V15.2933" stroke="#546FFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
       <path d="M12.5733 22.6667H19.4267" stroke="#546FFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
       </svg>
  );
};
