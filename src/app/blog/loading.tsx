export default function BlogLoading() {
  return (
    <section className="pt-32 lg:pt-40 pb-12 bg-bg-light">
      <div className="container-main">
        <div className="animate-pulse space-y-8">
          <div className="h-8 w-40 bg-novu-warm-100 rounded" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-novu-warm-100 overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-novu-warm-100 to-novu-warm-200" />
                <div className="p-5 space-y-3">
                  <div className="h-4 w-16 bg-novu-warm-100 rounded" />
                  <div className="h-5 w-48 bg-novu-warm-100 rounded" />
                  <div className="h-4 w-full bg-novu-warm-50 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
