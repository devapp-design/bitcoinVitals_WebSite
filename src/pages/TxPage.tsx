import { useParams } from "react-router-dom";
import DeepLinkPage from "./DeepLinkPage";

export default function TxPage() {
  const { txid } = useParams();

  return <DeepLinkPage label="Transaction" value={txid} />;
}