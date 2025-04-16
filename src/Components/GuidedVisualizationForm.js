import React from "react";

function GuidedVisualizationForm() {
  return (
    <section className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Guided Visualization</h2>
      <form>
        <textarea
          className="w-full p-4 border rounded mb-4"
          placeholder="Describe what you saw or felt..."
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
        >
          Save
        </button>
      </form>
    </section>
  );
}

export default GuidedVisualizationForm;
