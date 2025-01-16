"use client";

import { Button } from "../ui/button";
import Link from "next/link";

export const CVButton = () => {
  return (
    <div className=" ">
      <Button asChild variant="link">
        <Link
          href="https://drive.google.com/drive/folders/18a8JJNNOlbFhfdufaXbGZd31J7wNYyiu?usp=sharing"
          className="text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-xl font-bold text-white">Hire Me!</div>
        </Link>
      </Button>
    </div>
  );
};
