import React from "react";

const GATEWAY_URL = process.env.NEXT_PUBLIC_GATEWAY_URL
  ? process.env.NEXT_PUBLIC_GATEWAY_URL
  : "https://gateway.pinata.cloud";

export default function Files(props) {
  return (
    <div className="file-viewer">
      <p>Your IPFS CID:</p>
      <p>{props.cid}</p>
    </div>
  );
}
