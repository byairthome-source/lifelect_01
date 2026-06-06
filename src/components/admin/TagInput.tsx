"use client";

import { useState } from "react";
import { FiX } from "react-icons/fi";

interface TagInputProps {
  tags: string[];
  onChange: (tags: string[]) => void;
}

export default function TagInput({ tags, onChange }: TagInputProps) {
  const [input, setInput] = useState("");

  const addTag = () => {
    const trimmed = input.trim().toLowerCase();
    if (trimmed && !tags.includes(trimmed)) {
      onChange([...tags, trimmed]);
    }
    setInput("");
  };

  const removeTag = (tag: string) => {
    onChange(tags.filter((t) => t !== tag));
  };

  return (
    <div className="flex flex-wrap gap-2 items-center border border-novu-warm-200 rounded-xl px-3 py-2 bg-white min-h-[44px]">
      {tags.map((tag) => (
        <span key={tag} className="inline-flex items-center gap-1 bg-novu-orange/10 text-novu-orange text-label-sm px-2.5 py-0.5 rounded-full">
          {tag}
          <button onClick={() => removeTag(tag)} className="hover:text-red-500"><FiX className="w-3 h-3" /></button>
        </span>
      ))}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTag(); } }}
        placeholder="Add tag..."
        className="flex-1 min-w-[80px] text-body-sm text-novu-near-black bg-transparent outline-none placeholder:text-novu-near-black-15"
      />
    </div>
  );
}
