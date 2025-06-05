import { useAuth } from '@/libs/useAuth'

export function Profile() {
  const { user, signOut } = useAuth()

  if (!user) {
    return (
      <div className="text-center p-4">
        <p className="text-gray-600">Please log in to view your profile</p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Profile</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <p className="mt-1 text-gray-900">{user.email}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">User ID</label>
          <p className="mt-1 text-gray-900">{user.id}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Sign In</label>
          <p className="mt-1 text-gray-900">
            {new Date(user.last_sign_in_at || '').toLocaleString()}
          </p>
        </div>
        <button
          onClick={() => signOut()}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Sign Out
        </button>
      </div>
    </div>
  )
} 