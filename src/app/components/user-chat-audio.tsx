// components/UserAudio.js
const UserResponse = ({ audioSrc, placeholder }: { audioSrc: string; placeholder: string }) => {
  return (
    <div className="py-4">
      <div className="flex flex-col justify-start">
        <p className="ml-auto xl:w-2/4 sm:w-3/4 text-start font-sm text-lg text-purple-800 py-1">You</p>
        <figure className="flex flex-col ">
          <audio className="xl:w-2/4 sm:w-3/4 ml-auto text-blue-500 rounded-lg" controls src={audioSrc} />
          <figcaption className="text-pretty text-right p-1 text-neutral-600 italic">{placeholder}</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default UserResponse;
