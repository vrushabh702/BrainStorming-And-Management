CREATE DATABASE brainstorming;

CREATE TABLE agenda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    agendaTag VARCHAR(50),
    whoIsHere VARCHAR(50),
    meetingGoals TEXT,
    discussionPrompt TEXT,
    goals JSON,
    discussionTopics JSON
);

INSERT INTO agenda (title, date, agendaTag, whoIsHere, meetingGoals, discussionPrompt, goals, discussionTopics)
VALUES (
    'BRAINSTORM FOR NEW PROJECT IDEAS',
    '2024-01-29',
    'Agenda',
    "WHO'S HERE?",
    'MEETING GOALS',
    'Add discussion topics as a group',
    '["Add a meeting goal here"]',
    '["Type anything, @mention anyone"]'
);

CREATE TABLE card_styles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    variant VARCHAR(50) NOT NULL UNIQUE,
    bg VARCHAR(20) NOT NULL,
    bg_card VARCHAR(20) NOT NULL,
    text VARCHAR(20) NOT NULL,
    border VARCHAR(20) NOT NULL
);

INSERT INTO card_styles (variant, bg, bg_card, text, border) 
VALUES 
('brainstorming', 'bg-[#f5fbff]', 'bg-[#80caff]', 'text-[#5a8eb3]', 'border-[#0d99ff]'),
('agenda', 'bg-[#fbf7ff]', 'bg-[#d9b8ff]', 'text-[#9881b3]', 'border-[#9747ff]');


ALTER TABLE agenda
ADD COLUMN variant VARCHAR(50) NOT NULL;

update agenda 
set variant = "agenda"
where id = 1;


CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,       
    status VARCHAR(50),
    task VARCHAR(255),
    assignee_name VARCHAR(100),
    assignee_email VARCHAR(100),
    assignee_photo_url VARCHAR(255),
    due_date DATE
);


INSERT INTO tasks (status, task, assignee_name, assignee_email, assignee_photo_url, due_date) 
VALUES 
('Completed', 'Finish Report', 'John Doe', 'john.doe@example.com', 'https://avatar.iran.liara.run/public/9', '2025-03-25'),
('In Progress', 'Update Website', 'pooja singh', 'pooja.singh@example.com', 'https://avatar.iran.liara.run/public/56', '2025-03-30'),
('Pending', 'Design Brochure', 'Alice Brown', 'alice.brown@example.com', 'https://avatar.iran.liara.run/public/27', '2025-03-28');


CREATE TABLE nextStepPage (
  id INT PRIMARY KEY,
  welcomeMessage VARCHAR(255),
  nextStepsLabel VARCHAR(255),
  nextStepsTitle VARCHAR(255),
  trackActionItems VARCHAR(255),
  task_id INTEGER,
  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE SET NULL
);


INSERT INTO nextStepPage (
  welcomeMessage,
  nextStepsLabel,
  nextStepsTitle,
  trackActionItems,
  task_id
)
VALUES (
  'Welcome to the Brainstorming App',
  'Next steps',
  'Next Steps',
  'Track action items in the table below',
  1 -- Assuming there is a task with id = 1 in the `tasks` table
);


update nextStepPage
set id = 1
where task_id=1 