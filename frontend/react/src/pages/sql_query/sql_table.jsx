export default function SqlResultTable({ results }) {
    if (!results || results.length === 0) {
        return (
        <div className="p-4 text-gray-500 italic bg-gray-50 rounded-lg border border-dashed border-gray-300">
            No records found for this query.
        </div>
        );
    }

    const columns = Object.keys(results[0]);

    return (
        <div className="mt-6 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <p className="text-sm text-black font-bold mb-2 mt-2 ml-2">{results.length} rows returned</p>
                <table className="min-w-full divide-y divide-gray-300">
                
                <thead className="bg-gray-800">
                    <tr>
                    {columns.map((col) => (
                        <th
                        key={col}
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-white uppercase tracking-wider"
                        >
                        {col}
                        </th>
                    ))}
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">
                    {results.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                        {columns.map((col) => (
                        <td
                            key={col}
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-mono"
                        >
                            {row[col] !== null ? String(row[col]) : <span className="text-gray-300">NULL</span>}
                        </td>
                        ))}
                    </tr>
                    ))}
                </tbody>

                </table>
            </div>
            </div>
        </div>
        </div>
    );
};