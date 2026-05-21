import { useParams } from "react-router-dom";
import DeepLinkPage from "./DeepLinkPage";

export default function AddressPage() {
  const { address } = useParams();

  return <DeepLinkPage label="Address" value={address} />;
}