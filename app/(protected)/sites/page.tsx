export default function SitesPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Sites</h1>
        <p className="text-muted-foreground">Manage your sites and domains</p>
      </div>

      <div className="rounded-md border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Domain
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Status
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Created
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 align-middle">My Portfolio</td>
                <td className="p-4 align-middle">portfolio.example.com</td>
                <td className="p-4 align-middle">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    Active
                  </span>
                </td>
                <td className="p-4 align-middle">2024-01-15</td>
                <td className="p-4 align-middle">
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 align-middle">Blog Site</td>
                <td className="p-4 align-middle">blog.example.com</td>
                <td className="p-4 align-middle">
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="p-4 align-middle">2024-01-20</td>
                <td className="p-4 align-middle">
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-4 align-middle">E-commerce Store</td>
                <td className="p-4 align-middle">store.example.com</td>
                <td className="p-4 align-middle">
                  <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                    Inactive
                  </span>
                </td>
                <td className="p-4 align-middle">2024-01-10</td>
                <td className="p-4 align-middle">
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
