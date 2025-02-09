"use client";
 
import React from "react";
 
import { CodeBlock } from "./ui/code-block";
 
export function CodeBlockWithCode() {
  const code = `def create_project(name, tech_stack):
    print(f"🚀 Starting: {name}")
    return {
        "name": name,
        "stack": tech_stack,
        "status": "Active"
    }

# DevPSU Project
project = create_project(
    name="AI Study Buddy",
    tech_stack=["Python", "React"]
)

print("✨ Let's build something cool!")
`;
 
  return (
    <div className="max-w-3xl mx-auto w-full">
      <CodeBlock
        language="python"
        filename="devPSU.py"
        highlightLines={[2, 9, 10]}
        code={code}
      />
    </div>
  );
}