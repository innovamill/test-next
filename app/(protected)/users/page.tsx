export default function UsersPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Users</h1>
        <p className="text-muted-foreground">
          Manage user accounts and permissions
        </p>
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
                  Email
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Role
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Status
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Last Login
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 align-middle">John Doe</td>
                <td className="p-4 align-middle">john.doe@example.com</td>
                <td className="p-4 align-middle">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Admin
                  </span>
                </td>
                <td className="p-4 align-middle">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    Active
                  </span>
                </td>
                <td className="p-4 align-middle">2024-01-25 14:30</td>
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
                <td className="p-4 align-middle">Jane Smith</td>
                <td className="p-4 align-middle">jane.smith@example.com</td>
                <td className="p-4 align-middle">
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                    User
                  </span>
                </td>
                <td className="p-4 align-middle">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    Active
                  </span>
                </td>
                <td className="p-4 align-middle">2024-01-24 09:15</td>
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
                <td className="p-4 align-middle">Bob Johnson</td>
                <td className="p-4 align-middle">bob.johnson@example.com</td>
                <td className="p-4 align-middle">
                  <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                    Moderator
                  </span>
                </td>
                <td className="p-4 align-middle">
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="p-4 align-middle">2024-01-20 16:45</td>
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
                <td className="p-4 align-middle">Alice Brown</td>
                <td className="p-4 align-middle">alice.brown@example.com</td>
                <td className="p-4 align-middle">
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                    User
                  </span>
                </td>
                <td className="p-4 align-middle">
                  <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                    Suspended
                  </span>
                </td>
                <td className="p-4 align-middle">2024-01-15 11:20</td>
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
