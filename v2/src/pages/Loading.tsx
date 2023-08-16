export default function Loading() {
  return (
    <section className="h-screen w-full bg-gradient-to-b from-[#f0f6ff] to-[#fafcff]">
      <img
        src="/Spinner.png"
        className="fixed left-[50%] top-[50%] ml-[-3rem] mt-[-3rem] h-[6rem] w-[6rem] animate-spin"
      />
    </section>
  );
}
