import { FormRenderer } from "./components/FormRenderer";
import { exampleSchema } from "./form-engine/schema";

export default function App() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <FormRenderer schema={exampleSchema} />
    </div>
  );
}
