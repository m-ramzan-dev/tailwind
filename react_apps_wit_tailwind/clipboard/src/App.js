import AccessSection from "./AccessSection/AccessSection";
import Hero from "./Hero/Hero";
import QuickSection from "./QuickSection/QuickSection";
import ReferenceSection from "./ReferenceSection/ReferenceSection";
import SnippetSection from "./SnippetSection/SnippetSection";
import SuperChargeSection from "./SuperCharageSection/SuperChargeSection";

function App() {
  return (
    <>
      <Hero />
      <SnippetSection />
      <QuickSection />
      <AccessSection />
      <SuperChargeSection />
      <ReferenceSection />
    </>
  );
}

export default App;
