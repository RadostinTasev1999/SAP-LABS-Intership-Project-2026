export default function BookingSummary() {
  return (
    <>
      <div className="border-b border-gray-200 px-5 py-4">
        <h2 className="text-base font-semibold text-gray-900">
          Booking Summary
        </h2>
      </div>
      {/* Summary rows */}
      <div className="divid-y divide-gray-200 px-5">
        {/* Distance */}
        <div className="grid grid-cols-[40%_60%] items-center gap-2 py-4">
          <dt className="text-sm text-gray-500">Distance</dt>

          <dd className="text-sm font-medium text-gray-900">2799 mi</dd>
        </div>
        {/* First available date */}
        <div className="grid grid-cols-[40%_60%] items-center gap-2 py-4">
          <dt className="flex items-center gap-1 text-sm text-gray-500">
            First avail. date
            <span
              title="Your first available date is the first date that we would try to pick up your vehicle. Most vehicles are picked up within 7 days of this date."
              className="cursor-help text-gray-400"
              aria-label="Information about first available date"
            >
              ⓘ
            </span>
          </dt>
          <dd className="flex items-center justify-between gap-2 text-sm font-medium text-gray-900">
            <span>2026-11-15</span>
            <button
              type="button"
              aria-label="Edit first available date"
              className="shrink-0 text-gray-400 transition hover:text-blue-600"
            >
              ✎
            </button>
          </dd>
        </div>

        {/* Ship from */}
        <div className="grid grid-cols-[40%_60%] items-center gap-2 py-4">
          <dt className="text-sm text-gray-500">Ship from</dt>

          <dd className="flex items-center justify-between gap-2 text-sm font-medium text-gray-900">
            <span>Los Angeles, CA 10001</span>

            <button
              type="button"
              aria-label="Edit pickup location"
              className="shrink-0 text-gray-400 transition hover:text-blue-600"
            >
              ✎
            </button>
          </dd>
        </div>

        {/* Ship to */}
        <div className="grid grid-cols-[40%_60%] items-center gap-2 py-4">
          <dt className="text-sm text-gray-500">Ship to</dt>

          <dd className="flex items-center justify-between gap-2 text-sm font-medium text-gray-900">
            <span>Dallas, TX 10002</span>

            <button
              type="button"
              aria-label="Edit delivery location"
              className="shrink-0 text-gray-400 transition hover:text-blue-600"
            >
              ✎
            </button>
          </dd>
        </div>

        {/* Transport type */}
        <div className="grid grid-cols-[40%_60%] items-center gap-2 py-4">
          <dt className="flex items-center gap-1 text-sm text-gray-500">
            Transport Type
            <span
              title="Open trailers are the most cost-effective option. Enclosed trailers provide additional protection from weather and road debris."
              className="cursor-help text-gray-400"
              aria-label="Information about transport types"
            >
              ⓘ
            </span>
          </dt>
          <dd>
            <fieldset>
              <legend className="sr-only">Select Transport type</legend>
              <div className="flex flex-wrap items-center gap-3">
                {["Open", "Enclosed"].map((type) => (
                  <label
                    key={type}
                    className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-700"
                  >
                    <input
                      type="radio"
                      name="transportType"
                      value={type}
                      className="h-4 w-4 accent-blue-600"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </fieldset>
          </dd>
        </div>

        {/* Service type */}
        <div className="grid grid-cols-[40%_60%] items-center gap-2 py-4">
          <dt className="flex items-center gap-1 text-sm text-gray-500">
            Service type
            <span
              title="Your vehicle will be picked up and delivered as close as legally and safely possible to the requested addresses."
              className="cursor-help text-gray-400"
              aria-label="Information about service type"
            >
              ⓘ
            </span>
          </dt>
          <dd className="text-sm font-medium text-gray-900">Door to Door</dd>
        </div>
        {/* Insurance */}
        <div className="grid grid-cols-[40%_60%] items-center gap-2 py-4">
          <dt className="flex items-center gap-1 text-sm text-gray-500">
            Insurance
            <span
              title="Your vehicle is insured during transportation. See your service agreement for coverage details."
              className="cursor-help text-gray-400"
              aria-label="Information about insurance"
            >
              ⓘ
            </span>
          </dt>
          <dd className="text-sm font-medium text-gray-900">Included</dd>
        </div>

        {/* Transit time */}
        <div className="grid grid-cols-[40%_60%] items-center gap-2 py-4">
          <dt className="flex items-center gap-1 text-sm text-gray-500">
            Transit time
            <span
              title="Transit time is calculated after vehicle pickup and does not include the pickup window."
              className="cursor-help text-gray-400"
              aria-label="Information about transit time"
            >
              ⓘ
            </span>
          </dt>
          <dd className="text-sm font-medium text-gray-900">7-9 days</dd>
        </div>
      </div>
    </>
  );
}
