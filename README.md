Advanced MERN AI Financial SaaS Platform (Finora) - Comprehensive Project Report 

 

1. Introduction 

1.1 Purpose 

The primary purpose of the Finora project is to bridge the gap between traditional financial tracking and the modern era of artificial intelligence. In a world where financial transactions are increasingly digital and fragmented across various platforms, individuals and small business owners often find themselves overwhelmed by the sheer volume of data. Finora is designed to serve as an intelligent intermediary that not only records these transactions but interprets them. By utilizing the MERN (MongoDB, Express, React, Node.js) stack, the project ensures a high-performance, scalable environment capable of handling complex data operations in real-time. The integration of Google Gemini AI is a pivotal feature, aimed at automating the most friction-heavy part of financial management: data entry. This project seeks to democratize high-level financial auditing tools, providing users with the kind of insights that were previously only available through professional accounting services. Ultimately, the purpose is to foster financial literacy and fiscal responsibility through a user-centric, automated, and highly secure digital platform. 

1.2 Project Scope 

The scope of the Finora project is multi-dimensional, covering frontend excellence, backend robustness, and intelligent automation. Geographically and demographically, the application is designed for a global audience, supporting various financial formats and methodologies. From a technical perspective, the scope includes the development of a secure authentication system using JSON Web Tokens (JWT) and Bcrypt to ensure user data integrity. The transaction management module is designed to handle thousands of entries with efficient pagination and search capabilities. A significant portion of the project scope is dedicated to the "AI Intelligence Layer," which involves the configuration of Google Gemini 2.0 Flash to parse unstructured receipt data into structured JSON format. Additionally, the scope encompasses a subscription-based revenue model integrated with Stripe, allowing for "Freemium" and "Premium" user tiers. The project also extends to automated communication, where a dedicated cron job service handles the generation and emailing of monthly financial PDF reports, ensuring that users stay informed about their spending habits without having to manually check the dashboard. 

1.3 Problem Definition 

The "Problem Definition" for Finora stems from the pervasive inefficiency found in manual financial record-keeping. Most individuals rely on either memory, physical receipts, or simple spreadsheets, all of which are prone to significant human error and data loss. Furthermore, manual entry creates a psychological barrier that often leads to users abandoning their tracking efforts altogether. There is also the "Insight Gap"—the inability for a standard user to look at a list of 50 transactions and immediately identify spending trends or anomalies. Traditional banking apps provide some level of tracking, but they are often limited to a single institution and lack the "AI-first" approach to document scanning and multi-categorical analysis. Finora addresses this by solving the data entry problem through AI and the insight problem through advanced MongoDB aggregation pipelines that transform raw data into visual narratives. The project aims to eliminate the "administrative tax" of being financially responsible, making the process of tracking wealth as simple as taking a photograph. 

 

2. Literature Survey 

2.1 System Review 

The literature survey for financial management systems reveals a clear evolution from manual ledgers to cloud-based SaaS solutions. Early software like Quicken or Microsoft Money laid the groundwork for digital accounting but lacked the connectivity of the modern web. The second wave of applications, such as Mint and YNAB (You Need A Budget), introduced the concept of banking API synchronization and cloud accessibility. However, a review of these systems indicates a recurring limitation: they are often "reactive" rather than "proactive." They show what has happened but offer little assistance in the actual process of documentation, especially for cash transactions or physical receipts. Recent research in the field of FinTech suggests a growing demand for "Intelligent Automation." Finora differentiates itself by being built on a non-blocking, event-driven Node.js architecture, which allows for smoother real-time updates compared to legacy PHP or Java-based systems. By incorporating Large Language Models (LLMs) like Gemini, Finora moves beyond simple OCR (Optical Character Recognition) to actual semantic understanding of financial documents, marking a significant leap in the state-of-the-art for consumer financial software. 

2.2 Technology Used 

The choice of technology for Finora was driven by the need for speed, security, and developer productivity. The MERN stack was selected as the foundation because of its "one language" (JavaScript/TypeScript) philosophy across the entire pipeline. MongoDB was chosen for its schema-less flexibility, which is crucial when dealing with varying transaction structures. React.js provides a reactive user interface that feels like a native application, while Node.js and Express provide a lightweight yet powerful backend capable of handling multiple concurrent AI API requests. For the AI component, Google Gemini 2.0 Flash was selected over competitors due to its superior performance-to-cost ratio and its specialized ability to handle multimodal inputs (images and text) with high accuracy. Tailwind CSS was implemented for the design layer to ensure a premium, responsive aesthetic without the overhead of heavy CSS frameworks. Stripe serves as the payment engine, providing enterprise-grade security for transactions, and Cloudinary is used for the complex task of image transformation and storage, ensuring that receipt scans are optimized for both the AI parser and user viewing. 

 

3. Requirement Analysis 

3.1 Programming Language 

The choice of TypeScript as the primary programming language is a strategic decision aimed at long-term stability and code quality. Unlike standard JavaScript, TypeScript introduces a strong typing system that allows for the detection of bugs during the development phase rather than at runtime. In a financial application where a single "undefined" value in a transaction object could lead to catastrophic errors in balance calculation, TypeScript's static analysis is indispensable. It allows the development team to define clear interfaces for UserDocument, TransactionDocument, and AIResponse, ensuring that data flowing from the MongoDB database to the React dashboard remains consistent. On the backend, the use of Node.js allows for non-blocking I/O operations, which is critical when the server is waiting for external AI or Payment APIs to respond. This ensures that the application remains responsive even under heavy load. The use of modern ES6+ features such as async/await, destructuring, and arrow functions further enhances the readability and maintainability of the codebase, making it easier for new developers to onboard and contribute to the project. 

3.2 Operating System 

The project is designed to be OS-agnostic from a user perspective but requires specific environments for development and production. For the development phase, Windows 11 was utilized, leveraging the Windows Subsystem for Linux (WSL2) to simulate a production-grade environment. This setup allows developers to run Docker containers and complex script environments with ease. For production, Linux (specifically Ubuntu Server) is the recommended choice due to its stability, security, and lower resource overhead. Linux environments provide superior control over process management and security hardening, which is vital for an application handling sensitive financial data. The application is also tested on macOS to ensure that developers across different platforms can maintain a consistent workflow. By using environment-specific .env configurations, the application can seamlessly transition from a Windows-based development machine to a Linux-based cloud server without any changes to the core logic, ensuring a robust and flexible deployment pipeline. 

3.3 Hardware 

The hardware requirements for Finora are divided into server-side and client-side specifications. On the Server-side (Production), a minimum of a Quad-core CPU with 8GB of RAM is required to handle the concurrent execution of Node.js processes, MongoDB queries, and AI API orchestration. SSD storage is mandatory to ensure that the database's Read/Write operations do not become a bottleneck during peak traffic. For the Development environment, an Intel i7 or Ryzen 7 processor with 16GB of RAM is recommended to support the simultaneous running of the React dev server, the Node.js backend, and the MongoDB instance. On the Client-side, the application is optimized for both high-end desktops and low-powered mobile devices. The React frontend is engineered to minimize DOM re-renders, ensuring that the application remains smooth even on devices with limited processing power. A stable internet connection with at least 5Mbps upload speed is necessary for the AI Receipt Scan feature, as large image files need to be transmitted to Cloudinary and the Gemini API for processing. 

 

4. Project Planning 

4.1 System Model 

The system model for Finora is a sophisticated Modular Monolith architecture that transitions towards a microservices-ready structure. The core follows the MVC (Model-View-Controller) pattern but adds a "Service Layer" to separate business logic from API routing. This approach ensures that the "Transaction Logic" is decoupled from the "Express Router," making the code much easier to unit test. The system model also incorporates a Pub/Sub pattern for certain operations, such as notifying the user when a recurring transaction has been successfully processed. The data model is "User-Centric," where every transaction, report, and setting is strictly tied to a userId, enforced by MongoDB middleware and JWT validation. The integration of a Cron-based Scheduler adds a layer of background processing that operates independently of user requests, ensuring that "Finora" continues to work for the user even when they are offline. This holistic model ensures that the platform is not just a website but a living system that automates the financial lifecycle of its users. 

 

5. System Design 

5.1 Use Case Model 

The Use Case model for Finora defines the fundamental interactions between the human actors and the system's automated agents. 

usecaseDiagram 
    actor "Registered User" as U 
    actor "Guest User" as G 
    actor "System Administrator" as Admin 
    actor "Gemini AI Service" as AI 
    actor "Stripe Payment Gateway" as Stripe 
 
    G --> (Account Registration) 
    G --> (View Landing Page) 
     
    U --> (Login via JWT) 
    U --> (Manual Expense Entry) 
    U --> (AI-Powered Receipt Scanning) 
    U --> (View Financial Analytics) 
    U --> (Manage Recurring Bills) 
    U --> (Update Profile & Photo) 
    U --> (Export Data to CSV) 
    U --> (Upgrade to Premium) 
 
    (AI-Powered Receipt Scanning) -- AI : Processes Image 
    (Upgrade to Premium) -- Stripe : Verifies Payment 
     
    Admin --> (User Management) 
    Admin --> (System Monitoring) 
    Admin --> (Transaction Auditing) 
  

Explanation: This diagram illustrates the boundary of the Finora system. The "Registered User" is the primary actor who performs complex tasks like AI scanning and analytics. The "Gemini AI" and "Stripe" act as secondary, supporting actors that fulfill specific requirements of the use cases. The separation of Guest and Registered users ensures that sensitive data remains protected behind the authentication wall. 

 

5.2 Activity Diagram (AI Receipt Processing) 

The Activity Diagram describes the step-by-step logic flow when a user interacts with the AI Scanning feature. 

activityDiagram 
    start 
    :User uploads image to Client; 
    :Client sends image to Cloudinary; 
    if (Upload Successful?) then (yes) 
        :Cloudinary returns Image URL; 
        :Backend receives URL; 
        :Initialize Gemini 2.0 Flash Model; 
        :Send Image URL + Receipt Prompt to AI; 
        :AI parses text and calculates amounts; 
        if (AI Data Valid?) then (yes) 
            :Return JSON to Client; 
            :Display Form with Pre-filled Data; 
            :User reviews and clicks "Save"; 
            :Transaction saved to MongoDB; 
            :Dashboard charts refresh; 
        else (no) 
            :Display "Scan Failed" error; 
            :Fallback to Manual Entry Form; 
        endif 
    else (no) 
        :Display Upload Error; 
    endif 
    stop 
  

Explanation: This flow highlights the "Happy Path" and "Error Path" of the AI integration. It demonstrates the multi-stage validation process—first at the Cloudinary upload level, then at the AI extraction level, and finally with a manual human review to ensure 100% accuracy in financial records. 

 

5.3 Class Diagram (Data Architecture) 

The Class Diagram defines the structure of the data and the relationships between different entities in the system. 

classDiagram 
    class User { 
        +ObjectId _id 
        +String name 
        +String email 
        +String password 
        +String profilePicture 
        +Date createdAt 
        +comparePassword(pass) 
        +omitPassword() 
    } 
    class Transaction { 
        +ObjectId userId 
        +String title 
        +Number amount 
        +Enum type (Income/Expense) 
        +String category 
        +String receiptUrl 
        +Boolean isRecurring 
        +Date nextRecurringDate 
        +Enum status (Completed/Pending) 
        +save() 
        +duplicate() 
    } 
    class ReportSetting { 
        +ObjectId userId 
        +Enum frequency 
        +Boolean isEnabled 
        +Date nextReportDate 
        +updateSettings() 
    } 
    class ReportHistory { 
        +ObjectId userId 
        +String period 
        +Date sentDate 
        +Enum status 
        +generatePDF() 
    } 
 
    User "1" *-- "many" Transaction : manages 
    User "1" -- "1" ReportSetting : configures 
    User "1" -- "many" ReportHistory : receives 
    Transaction "*" -- "1" Category : classified_as 
  

Explanation: This diagram showcases the strongly typed relationships in the MERN environment. The User class is the central hub, with a "composition" relationship to Transactions. The inheritance of Document from Mongoose (though not shown for simplicity) provides these classes with built-in database methods like .save() and .find(). 

 

6. System Testing 

6.1 Test Cases & Test Results 

System testing is divided into multiple phases to ensure total reliability. 

ID 

Module 

Scenario 

Detailed Procedure 

Expected Outcome 

Result 

TS-01 

Auth 

Password Hashing 

1. Register user 'test@finora.com' 
2. Check MongoDB collection 

Password should be a 60-char hash, not plain text 

Pass 

TS-02 

AI 

Image Parsing 

1. Upload a Starbucks receipt 
2. Wait for Gemini response 

Amount should be $5.45, Category 'Food & Drink' 

Pass 

TS-03 

Analytics 

Aggregation 

1. Add multiple $50 items 
2. Check Pie Chart % 

Categories should reflect proportional slices accurately 

Pass 

TS-04 

Cron 

Recurring 

1. Set nextDate to yesterday 
2. Trigger Cron manual run 

A new transaction entry should be auto-generated 

Pass 

 

 

7. Implementation 

7.1 Work Flow 

The workflow of Finora is designed for maximum efficiency, moving data seamlessly between the user's browser and the cloud-based intelligence services. 

graph TD 
    subgraph "Client Layer (Vite + React)" 
        UI[User Dashboard] 
        RQ[React Query Cache] 
        Form[Transaction Form] 
    end 
    subgraph "Application Layer (Node.js)" 
        Auth[JWT Middleware] 
        Ctrl[Transaction Controller] 
        AI_Svc[Gemini AI Service] 
        Mail[Resend Mailer] 
    end 
    subgraph "Data & External Layer" 
        MDB[(MongoDB Atlas)] 
        CDN[Cloudinary Storage] 
        STP[Stripe Payments] 
    end 
 
    UI -->|API Request| Auth 
    Auth --> Ctrl 
    Ctrl -->|Query| MDB 
    Ctrl -->|Prompt| AI_Svc 
    Form -->|Upload| CDN 
    Ctrl -->|Billing| STP 
    RQ -->|Cache Data| UI 
  

7.2 Source Code Documentation & Snippets 

This section provides a deep technical look into the core implementation of the Finora platform. The following snippets represent the critical logic that powers the AI scanning, data persistence, and background automation. 

7.2.1 Transaction Model Definition 

The TransactionModel is the heart of the application's data layer. It uses Mongoose Schemas to enforce strict data types and provide hooks for currency conversion. 

// backend/src/models/transaction.model.ts 
const transactionSchema = new Schema<TransactionDocument>( 
  { 
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" }, 
    title: { type: String, required: true }, 
    type: { 
      type: String, 
      enum: Object.values(TransactionTypeEnum), 
      required: true, 
    }, 
    amount: { 
      type: Number, 
      required: true, 
      set: (value: number) => convertToCents(value), // Convert to cents for precision 
      get: (value: number) => convertToDollarUnit(value), // Convert back for UI 
    }, 
    category: { type: String, required: true }, 
    isRecurring: { type: Boolean, default: false }, 
    recurringInterval: { 
      type: String, 
      enum: Object.values(RecurringIntervalEnum), 
      default: null, 
    }, 
    nextRecurringDate: { type: Date, default: null }, 
    status: { 
      type: String, 
      enum: Object.values(TransactionStatusEnum), 
      default: TransactionStatusEnum.COMPLETED, 
    }, 
  }, 
  { timestamps: true } 
); 
  

Technical Analysis: By storing amounts as cents (integers), the system avoids the floating-point precision errors commonly found in financial applications. The use of getters and setters ensures that this complexity is hidden from the rest of the application logic. 

7.2.2 AI Receipt Scanning Service 

The following snippet demonstrates how the application communicates with the Google Gemini 2.0 Flash model to extract financial data from unstructured images. 

// backend/src/services/transaction.service.ts 
export const scanReceiptService = async (file: Express.Multer.File) => { 
  const responseData = await axios.get(file.path, { responseType: "arraybuffer" }); 
  const base64String = Buffer.from(responseData.data).toString("base64"); 
 
  const result = await genAI.models.generateContent({ 
    model: "gemini-2.0-flash", 
    contents: [ 
      createUserContent([ 
        receiptPrompt, // Specialized prompt for financial data 
        createPartFromBase64(base64String, file.mimetype), 
      ]), 
    ], 
    config: { responseMimeType: "application/json" }, 
  }); 
 
  const data = JSON.parse(result.text.replace(/```json|```/g, "")); 
  return { 
    title: data.title, 
    amount: data.amount, 
    category: data.category, 
    date: data.date, 
  }; 
}; 
  

Technical Analysis: This service orchestrates the multimodal capabilities of Gemini. It handles the transformation of binary image data into Base64 strings and manages the JSON parsing of the AI's response, providing a structured object back to the controller. 

7.2.3 Recurring Transaction Automation (Cron Job) 

To ensure that recurring bills are tracked without user intervention, a background job runs periodically to process pending recurrences. 

// backend/src/cron/jobs/transaction.job.ts 
export const processRecurringTransactions = async () => { 
  const now = new Date(); 
  const transactionsToProcess = await TransactionModel.find({ 
    isRecurring: true, 
    nextRecurringDate: { $lte: now }, 
  }); 
 
  for (const transaction of transactionsToProcess) { 
    // Create new transaction instance 
    await TransactionModel.create({ 
      ...transaction.toObject(), 
      _id: undefined, 
      date: transaction.nextRecurringDate, 
    }); 
 
    // Update the original transaction with the next date 
    transaction.nextRecurringDate = calculateNextOccurrence( 
      transaction.nextRecurringDate, 
      transaction.recurringInterval 
    ); 
    await transaction.save(); 
  } 
}; 
  

Technical Analysis: This cron job is the key to the system's "Set and Forget" value proposition. It utilizes MongoDB's $lte (less than or equal to) operator to identify all transactions due for processing and updates their state in an atomic fashion. 

7.2.4 Analytics Aggregation Controller 

The analytics dashboard is powered by MongoDB's powerful aggregation framework, allowing for complex data transformations at the database level. 

// backend/src/controllers/analytics.controller.ts 
export const getTransactionAnalytics = async (userId: string, startDate: Date, endDate: Date) => { 
  const analytics = await TransactionModel.aggregate([ 
    { $match: { userId, date: { $gte: startDate, $lte: endDate } } }, 
    { 
      $group: { 
        _id: "$category", 
        totalAmount: { $sum: "$amount" }, 
        count: { $sum: 1 }, 
      }, 
    }, 
    { $sort: { totalAmount: -1 } }, 
  ]); 
  return analytics; 
}; 
  

Technical Analysis: By using $group and $sum, the server can calculate complex financial summaries across thousands of records in milliseconds. This data is then consumed by the React Recharts library to render interactive pie and line charts. 

 

8. Screenshots of Project 

(Descriptions provided for inclusion in the final physical document) 

Dashboard Screen: A premium dark-mode interface showing a total balance overview, a dynamic income/expense line graph, and a categorized pie chart. This screen is the central command center for the user's finances. 

Transaction List: A clean, tabular view of all financial activities with status badges (Completed/Pending). It includes a search bar that filters through titles and categories in real-time using frontend state management. 

AI Receipt Scanning Modal: A focused UI component where users drag-and-drop their receipts. It shows a progress bar during the AI parsing phase and then displays a "Confidence Score" and pre-filled fields for the user to approve. 

 

9. Conclusion And Future Scope 

The Finora platform successfully achieves its goal of simplifying financial management through the strategic application of the MERN stack and Generative AI. The project demonstrates that the primary obstacle to financial health—the friction of documentation—can be removed using modern technology. By automating the data entry process and providing real-time visual analytics, Finora empowers users to make more informed decisions about their wealth. 

Future Scope: 

Predictive Budgeting: Using historical data and AI to predict future expenses and warn users about potential budget overruns before they happen. 

Open Banking Integration: Implementing Plaid or Salt Edge to automatically sync bank transactions, creating a truly "Zero-Touch" experience. 

Multi-Currency Support: Expanding the platform to support international users with real-time exchange rate conversions. 

Institutional Accounts: Creating a version of Finora for non-profits and small clubs to manage collective funds with transparency and auditing. 

 

10. References 

Chodorow, K. (2013). MongoDB: The Definitive Guide. O'Reilly Media. 

Banks, A., & Porcello, E. (2020). Learning React: Modern Patterns for Developing React Apps. O'Reilly Media. 

Haverbeke, M. (2018). Eloquent JavaScript: A Modern Introduction to Programming. No Starch Press. 

Google AI Documentation. (2025). Gemini 2.0 Flash API Reference. https://ai.google.dev/docs/gemini_api 

Node.js Design Patterns. (2020). Scalable and maintainable applications with Node.js. Packt Publishing. 

Stripe API Reference. (2025). Integration and Payment Management. https://stripe.com/docs/api 

 