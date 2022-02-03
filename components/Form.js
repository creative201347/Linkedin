import { useState } from "react";

function Form() {
  const [input, setInput] = useState("");

  const uploadPost = async (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col relative space-y-2 text-black/80 dark:text-white/75">
      <textarea
        rows="4"
        placeholder="What do you want to talk about?"
        className="bg-transparent focus:outline-none dark:placeholder-white/75"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        className="absolute -bottom-2 -right-1 font-medium bg-blue-500 hover:bg-blue-500 disabled:text-black/40 disabled:bg-white/75 disabled:cursor-not-allowed text-white rounded-full px-3.5 py-1"
        type="submit"
        disabled={!input.trim()}
        onClick={uploadPost}
      >
        Post
      </button>
    </form>
  );
}

export default Form;
