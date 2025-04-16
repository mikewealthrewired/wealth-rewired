// src/Components/pages/FAQ.jsx
import React from "react";

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h1>

      <div className="space-y-6">
        <div>
          <h2 className="font-semibold text-lg">How is Wealth Rewired different from budgeting apps?</h2>
          <p>
            Wealth Rewired focuses on your mindset, habits, and behavior first—before we even talk numbers.
            Most tools just tell you what to do. This system helps you transform who you are with money.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Do I need to be “good with money” already?</h2>
          <p>
            Not at all. Whether you're just starting or already investing, this is about clearing the internal roadblocks
            that sabotage your progress.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">How long does rewiring take?</h2>
          <p>
            Most people start feeling a shift within a few weeks. True transformation happens with repetition and reflection,
            which is why we focus on daily practices and tracking progress.
          </p>
        </div>
      </div>
    </div>
  );
}
