# Product V — Backend

## Overview

Product V is a consent-first student support platform designed to identify meaningful changes in student data and connect students with appropriate human support.

The backend is responsible for:

- Authentication and role management
- Student data management
- Consent management
- Academic data storage
- Support signal generation
- Explainable signal reasons
- Support case management
- Interventions
- Follow-ups and outcomes
- Data correction requests
- Privacy and audit logging

The system is designed around:

> Detect earlier → Explain clearly → Human review → Student choice → Support → Follow-up

AI is an enabling layer for explanations, communication drafts and optional recovery plans. It does not independently decide whether a student needs support.

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

---

# Database Models

## 1. User

**File:** `models/User.js`

Stores authentication and identity information for users.

Supported roles:

- STUDENT
- MENTOR
- ADMIN

### Purpose

Used for:

- Authentication
- Authorization
- RBAC
- Identifying mentors and administrators

---

## 2. StudentProfile

**File:** `models/StudentProfile.js`

Stores student-specific information.

Contains:

- Student ID
- Department
- Semester
- Assigned mentor

### Purpose

Separates student information from authentication data.

---

## 3. Attendance

**File:** `models/Attendance.js`

Stores attendance records.

Contains:

- Student
- Course
- Date
- Attendance percentage
- Data source

### Purpose

Attendance is one of the primary institutional signals used by the support signal engine.

---

## 4. AcademicRecord

**File:** `models/AcademicRecord.js`

Stores academic performance records.

Contains:

- Student
- Course
- Assessment
- Score
- Maximum score
- Date

### Purpose

Used to understand academic performance trends.

---

## 5. Assignment

**File:** `models/Assignment.js`

Stores assignment completion information.

Possible statuses:

- SUBMITTED
- LATE
- MISSING

### Purpose

Used to identify changes in assignment completion patterns.

---

## 6. Engagement

**File:** `models/Engagement.js`

Stores a simplified course engagement score.

### Purpose

Provides an additional consent-controlled signal for identifying meaningful changes in academic engagement.

---

## 7. Consent

**File:** `models/Consent.js`

Stores student consent for individual data categories.

Supported categories include:

- ATTENDANCE
- ACADEMIC
- ASSIGNMENTS
- ENGAGEMENT
- SELF_REPORTED_SUPPORT

### Purpose

The signal engine must only use data categories for which the student has granted consent.

Consent is therefore enforced at the backend level rather than being only a frontend checkbox.

---

## 8. SupportSignal

**File:** `models/SupportSignal.js`

Represents a potentially meaningful change detected by the backend.

A signal contains:

- Student
- Domain
- Severity
- Status
- Detection timestamp

Supported domains:

- ACADEMIC
- FINANCIAL
- WELLBEING

### Important

A support signal does NOT mean that a student is failing or has a problem.

It means:

> A pattern may warrant human review and possible support.

---

## 9. SignalReason

**File:** `models/SignalReason.js`

Stores the specific reasons behind a support signal.

Example:

- Attendance decreased from 86% to 68%
- Assignment completion decreased from 90% to 60%

### Purpose

Makes the system explainable.

Instead of only showing:

`Risk = 78`

the system can explain:

`Attendance declined by 18 percentage points over the observed period.`

---

## 10. SupportCase

**File:** `models/SupportCase.js`

Represents the actual support workflow associated with a student.

A support signal and a support case are different concepts.

### Support Signal

> Something may require attention.

### Support Case

> A human is now handling the support situation.

Possible lifecycle:

DETECTED → UNDER_REVIEW → CONTACTED → ACCEPTED / DECLINED / POSTPONED → IN_PROGRESS → FOLLOW_UP → RESOLVED / REFERRED

A case can originate from:

- SYSTEM_SIGNAL
- STUDENT_REQUEST

---

## 11. Intervention

**File:** `models/Intervention.js`

Represents a specific support option offered to a student.

Examples:

- Academic mentoring
- Financial support referral
- Peer support
- Wellbeing support
- Study assistance

### Purpose

Tracks what support was offered and whether it was accepted, declined, postponed or completed.

---

## 12. FollowUp

**File:** `models/FollowUp.js`

Stores scheduled follow-up actions after support has been provided.

### Purpose

Ensures the system does not stop after the initial intervention.

Example:

Support session completed → follow-up scheduled for next week.

---

## 13. Outcome

**File:** `models/Outcome.js`

Stores the final/current outcome of a support case.

Possible outcomes include:

- RESOLVED
- ONGOING
- REFERRED
- NO_RESPONSE
- DECLINED_SUPPORT

It can also store optional student feedback:

- HELPFUL
- SOMEWHAT_HELPFUL
- NOT_HELPFUL
- NO_RESPONSE

### Purpose

Closes the support lifecycle and allows the system to measure whether interventions were completed and how students experienced them.

---

## 14. CorrectionRequest

**File:** `models/CorrectionRequest.js`

Allows students to request correction of inaccurate information.

Example:

A student sees incorrect attendance information and submits a correction request.

Lifecycle:

Student Request → Admin Review → APPROVED / REJECTED

### Important

Students do not directly modify official institutional records.

---

## 15. AuditLog

**File:** `models/AuditLog.js`

Records important actions performed within the system.

Examples:

- Who viewed a support case
- Who reviewed a correction
- Who modified a case
- Which resource was accessed
- Why it was accessed

### Purpose

Provides accountability and supports the privacy/access-ledger feature.

---

# Core Data Flow

```text
Student / Institutional Data
            ↓
      Consent Check
            ↓
     Data Validation
            ↓
 Feature / Trend Calculation
            ↓
   Support Signal Engine
            ↓
    Structured Reasons
            ↓
          AI
            ↓
     Human Mentor Review
            ↓
      Student Choice
            ↓
       Intervention
            ↓
        Follow-up
            ↓
         Outcome