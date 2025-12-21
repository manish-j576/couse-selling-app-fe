import { useAdminAuth } from "../Provider/AdminAuthContext";
import { AdminHomeButtonsContainer } from "./AdminHomeButtonsContainer";

export default function AdminHome() {

  const AdminAuthContext = useAdminAuth()
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <main className="relative">
        <div
          className="relative h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `url(/placeholder.svg?height=500&width=1920&query=students+studying+learning+education+blue+theme)`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 to-blue-600/70" />

          <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 justify-around">
            <div className="max-w-2xl text-white">
              <h2 className="mb-4 text-5xl font-bold leading-tight text-balance">
                Admin Dashboard
              </h2>
              <div className="mb-8 text-xl leading-relaxed text-white/95">
                <ul>
                  <li>
                    <b>Create Course</b> - Create a new course
                  </li>
                  <li>
                    <b>Modify Course</b> - Modify course{" "}
                  </li>
                  <li>
                    <b>Delete Course</b> - Delete course{" "}
                  </li>
                  <li>
                    <b>Preview Course</b> - Preview a course{" "}
                  </li>
                </ul>
              </div>
              <button className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50">
                Get Started
              </button>
            </div>
            {AdminAuthContext.isAdminLoggedIn && <AdminHomeButtonsContainer></AdminHomeButtonsContainer>}
          </div>
        </div>

        {/* Features Section */}
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-blue-100 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-blue-900">
                Quality Courses
              </h3>
              <p className="leading-relaxed text-blue-800/80">
                Access a wide range of expertly crafted courses designed to help
                you learn effectively.
              </p>
            </div>

            <div className="rounded-lg border border-blue-100 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-blue-900">
                Track Progress
              </h3>
              <p className="leading-relaxed text-blue-800/80">
                Monitor your learning journey with detailed progress tracking
                and performance insights.
              </p>
            </div>

            <div className="rounded-lg border border-blue-100 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-blue-900">
                Flexible Learning
              </h3>
              <p className="leading-relaxed text-blue-800/80">
                Learn at your own pace with 24/7 access to course materials and
                resources.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
