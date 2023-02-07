export default function Banner({ data }) {
  return (
    <main className={`w-full h-[100vh] flex`}>
      <div className="border-r-2 border-slate-200 px-2 h-full">decoration</div>
      <div className="px-4 h-full">
        <div className="h-4/6">banner</div>
        <div className="h-2/6">best sellers</div>
      </div>
    </main>
  );
}