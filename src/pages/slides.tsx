import useIsBrowser from "@docusaurus/useIsBrowser";
import Reaveal from "@site/src/components/Reaveal";

export default function Slide() {
  const isBrowser = useIsBrowser();
  const urlSearchParams = new URLSearchParams(
    isBrowser ? window.location.search : undefined,
  );
  const name = (urlSearchParams.get("name") ?? "").replace(/[^a-z\d-]/g, "");
  const page = urlSearchParams.get("page") !== null;
  return <Reaveal name={name} page={page} full />;
}
