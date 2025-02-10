"use client";
 
import React from "react";
import { CodeBlock } from "./ui/code-block";

const codeExamples = {
  mlpsu: {
    code: `import tensorflow as tf
import numpy as np
from sklearn.model_selection import train_test_split

# Load and preprocess the data
X = np.random.randn(1000, 20)  # Example features
y = np.random.randint(0, 2, 1000)  # Binary labels

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create a neural network model
model = tf.keras.Sequential([
    tf.keras.layers.Dense(64, activation='relu'),`,
    filename: "ml_model.py",
    highlightLines: [1, 5, 9, 13]
  },
  devpsu: {
    code: `from typing import List, Dict
import json

def create_project(name: str, tech_stack: List[str]) -> Dict:
    """Create a new development project with basic setup."""
    project_config = {
        "name": name,
        "tech_stack": tech_stack,
        "status": "Active",
        "version": "1.0.0"
    }
    
    print(f"🚀 Creating project: {name}")
    print(f"Technologies: {', '.join(tech_stack)}")
    return project_config`,
    filename: "project_setup.py",
    highlightLines: [3, 5, 12, 14]
  }
};

interface CodeBlockWithCodeProps {
  page?: keyof typeof codeExamples;
}

export function CodeBlockWithCode({ page = 'devpsu' }: CodeBlockWithCodeProps) {
  const example = codeExamples[page];
 
  return (
    <div className="max-w-3xl mx-auto w-full">
      <CodeBlock
        language="python"
        filename={example.filename}
        highlightLines={example.highlightLines}
        code={example.code}
      />
    </div>
  );
}