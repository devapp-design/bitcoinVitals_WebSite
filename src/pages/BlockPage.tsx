import { useParams } from "react-router-dom";
import DeepLinkPage from "./DeepLinkPage";

export default function BlockPage() {
  const { hash } = useParams();

  return <DeepLinkPage label="Block" value={hash} />;
}