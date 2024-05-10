```markdown
# ThinkMate AI

Welcome to ThinkMate AI! This application is designed as an educational platform tailored for instructors and students to manage and participate in discussions and quizzes. ThinkMate AI is a web-based conversational voicebot AI system that utilizes a Large Language Model to enhance high school students' critical thinking skills and reading comprehension through interactive discussions.

[Deployed Website](https://www.thinkmateai.tech) | [Backend Repository](https://github.com/rizkisiraj/thinkmate-backend)

## Project Description

This project is structured to facilitate real-time discussions and quizzes between students and educators. It includes functionality for creating discussions, managing quizzes, and a dynamic interaction system via audio and text-based responses.

### Key Features

- User authentication and registration.

- Role-based access control for instructors and students.

- Creation and management of discussion topics by instructors.

- Participation in discussions and quizzes by students.

- Real-time updates and notifications.

## Technology Stack

- **Frontend**: Next.js, React, Tailwind CSS

- **State Management**: Redux Toolkit, React Redux

- **API Handling**: Axios, SWR

- **Design**: Radix UI, Lucide Icons, Shadcn UI, Aceternity

- **Animation**: Framer Motion

- **Backend**: Go

- **Hosting**: Vercel, Railway

## Team: Jangan Lupa Sprint

- **Ketua**: Zahwa Almira Kayla

- **Anggota**:

- Bintang Rahmatullah

- Muhammad Rizki Siraj

## Setup Instructions

To get this project up and running on your local machine, follow these steps:

### Prerequisites

- Node.js (version >= v18.17.0 is required)

- A package manager like npm or Yarn
```

### Installation

1.  **Clone the Repository**

```bash

git clone https://github.com/just-a-star/ThinkMate-AI-Frontend.git

```

```bash

cd  ThinkMate-AI-Frontend

```

2.  **Install Dependencies**

Using npm:

```bash

npm install

```

Or using Yarn:

```bash

yarn

```

3.  **Set Up Environment Variables**

Copy the `.env.example` file to a new file named `.env`, and update the environment variables to match your local setup.

4.  **Run the Development Server**

```bash

npm run dev

```

Or with Yarn:

```bash

yarn dev

```

Visit `http://localhost:3000` in your browser to view the application.

### Building and Running for Production

To build the application for production, run:

```bash

npm  run  build

npm  start

```

Or with Yarn:

```bash

yarn  build

yarn  start

```

## Code Structure

- **`src/app`**: Contains all the application logic, categorized into subdirectories for students (`siswa`) and instructors (`pengajar`).

- **`src/components`**: Reusable UI components used across the application.

- **`src/services`**: Services and utilities for API interactions and other functions.

- **`src/store`**: Redux store configuration, slices, and persistence setup.

- **`public`**: Static files like images and icons used in the application.

## License

```

```
