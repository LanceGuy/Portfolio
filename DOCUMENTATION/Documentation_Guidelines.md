# Instructions: Comprehensive Codebase Documentation Generator

You are tasked with creating complete, professional documentation for an existing codebase. Your goal is to transform scattered technical implementations into a structured documentation suite that serves developers, stakeholders, and operational teams.

## Analysis Protocol

Execute the following phases sequentially, ensuring completeness at each stage:

### Phase 1: DISCOVERY
**Objective**: Map the codebase structure and identify key components.

**Actions Required**:
- Identify all entry points (main files, configuration files, package.json, requirements.txt, etc.)
- Catalog directory structure and file organization patterns
- Locate core modules, utilities, and shared components
- Identify external dependencies and integrations
- Document build systems, testing frameworks, and deployment configurations

**Output**: Create a hierarchical overview of the codebase structure with component classifications.

### Phase 2: ARCHITECTURE ANALYSIS
**Objective**: Understand system design and component relationships.

**Actions Required**:
- Map data flow between major components
- Identify design patterns and architectural decisions
- Document API endpoints, database schemas, and external integrations
- Analyze configuration management and environment handling
- Trace user request/data processing workflows

**Output**: Generate technical architecture documentation with component interaction diagrams.

### Phase 3: FEATURE EXTRACTION
**Objective**: Document user-facing functionality and business logic.

**Actions Required**:
- Identify distinct features and user workflows
- Extract business rules and validation logic
- Document user interfaces and interaction patterns
- Map features to underlying technical implementation
- Identify configuration options and customization capabilities

**Output**: Create feature-specific documentation linking business value to technical implementation.

### Phase 4: OPERATIONAL ASSESSMENT
**Objective**: Document deployment, monitoring, and maintenance procedures.

**Actions Required**:
- Analyze deployment configurations and requirements
- Identify monitoring, logging, and error handling mechanisms
- Document database migrations, backup procedures, and disaster recovery
- Extract environment-specific configurations and scaling considerations
- Identify maintenance tasks, update procedures, and troubleshooting guides

**Output**: Generate operational runbooks and deployment guides.

## Quality Standards

**Completeness Requirements**:
- Every major component must be documented
- All user-facing features must have clear explanations
- Setup instructions must enable successful deployment
- Architecture documentation must support informed technical decisions

**Clarity Requirements**:
- Use clear, jargon-free language where possible
- Include code examples and configuration samples
- Provide context for technical decisions and trade-offs
- Link related concepts and cross-reference between documents

**Accuracy Requirements**:
- Verify all setup instructions are current and functional
- Ensure code examples match actual implementation
- Validate that architectural descriptions align with codebase structure
- Cross-check feature descriptions against actual functionality

**Maintainability Requirements**:
- Use consistent formatting and organization patterns
- Include version information and last-updated dates
- Structure content for easy updates as code evolves
- Provide clear ownership and maintenance responsibilities

## Analysis Techniques

**Code Pattern Recognition**:
- Identify common architectural patterns (MVC, microservices, event-driven, etc.)
- Recognize framework-specific conventions and best practices
- Extract reusable components and shared utilities
- Document design decisions and their rationale

**Business Logic Extraction**:
- Trace user workflows from interface to data persistence
- Identify validation rules, business constraints, and processing logic
- Map feature functionality to user value and business objectives
- Document configuration-driven behavior and customization points

**Dependency Analysis**:
- Map internal module dependencies and coupling patterns
- Document external service integrations and API contracts
- Identify configuration dependencies and environment requirements
- Analyze build-time vs runtime dependencies

## Validation Checklist

Before completing documentation, verify:

- [ ] New team member can successfully set up development environment using SETUP.md
- [ ] All major features are documented with business context and technical implementation
- [ ] Architecture documentation enables informed technical decision-making
- [ ] Deployment guide supports reliable production deployments
- [ ] Cross-references between documents are accurate and helpful
- [ ] Code examples are tested and current
- [ ] Non-technical stakeholders can understand system capabilities from README.md
- [ ] Operational procedures support reliable system maintenance

## Success Metrics

**Immediate Indicators**:
- Documentation covers 100% of major system components
- Setup instructions result in functional development environment
- Feature documentation connects user value to technical implementation
- Architecture documentation supports technical planning decisions

**Long-term Indicators**:
- Reduced onboarding time for new team members
- Decreased time spent on code archaeology and reverse engineering
- Improved stakeholder understanding of system capabilities
- Enhanced ability to plan technical improvements and refactoring

Execute this analysis systematically, ensuring each phase builds upon the previous one to create comprehensive, accurate, and maintainable codebase documentation.
Synchronize Documentation
cursor
development
You are tasked with updating existing documentation to match the current state of a codebase. Execute this process systematically to ensure accuracy while preserving documentation quality and structure.

## Analysis Protocol

### Phase 1: DOCUMENTATION INVENTORY
**Objective**: Catalog existing documentation structure and establish baseline understanding.

**Required Actions**:
- Identify all existing documentation files and their primary purposes
- Map cross-references, internal links, and document dependencies
- Analyze established style patterns, terminology, and organizational structure
- Document current audience focus and technical depth levels
- Catalog code examples, configuration samples, and technical specifications

**Critical Focus**: Understand what exists before determining what needs updating.

### Phase 2: ACCURACY ASSESSMENT
**Objective**: Compare documentation assertions against current codebase reality.

**Required Actions**:
- Verify setup instructions against current installation requirements
- Validate code examples against actual implementation
- Check API documentation against current endpoints and data structures
- Confirm architecture descriptions match current system design
- Assess feature descriptions against actual user-facing functionality

**Critical Focus**: Identify specific discrepancies, not general outdatedness.

### Phase 3: IMPACT ANALYSIS
**Objective**: Determine which documentation sections require updates and why.

**Required Actions**:
- Map code changes to affected documentation sections
- Identify downstream documentation dependencies of changed components
- Assess whether changes affect multiple documents or cross-references
- Determine scope of updates needed (minor corrections vs major revisions)
- Prioritize updates based on accuracy impact and user importance

**Critical Focus**: Understand the ripple effects of each required change.

### Phase 4: SELECTIVE UPDATES
**Objective**: Implement precise updates while preserving documentation quality.

**Required Actions**:
- Update only inaccurate or outdated content, preserving correct existing information
- Maintain original documentation style, voice, and formatting patterns
- Ensure updated content integrates seamlessly with existing sections
- Verify and update cross-references affected by content changes
- Preserve original organizational structure and navigation patterns

**Critical Focus**: Surgical precision - modify only what needs changing.

## Update Standards

### Accuracy Requirements
- All updated content must accurately reflect current codebase state
- Code examples must be tested and functional with current implementation
- Configuration samples must work with current environment requirements
- Cross-references must remain valid after content updates

### Preservation Requirements
- Maintain original documentation voice, tone, and writing style
- Preserve established terminology and naming conventions
- Keep existing organizational structure and document hierarchy
- Retain original audience focus and technical depth appropriate for intended users

### Consistency Requirements
- Ensure updated sections integrate seamlessly with unchanged content
- Maintain unified formatting and presentation standards
- Preserve cross-document consistency in terminology and concepts
- Keep internal linking structure functional and intuitive

### Transparency Requirements
- Clearly identify what sections were updated and why
- Provide rationale for significant changes or additions
- Maintain change history appropriate for team collaboration
- Document any assumptions made during update process

## Quality Validation Protocol

### Content Verification
- [ ] Updated setup instructions result in functional development environments
- [ ] Modified code examples execute successfully with expected outputs
- [ ] API documentation reflects current endpoints and data structures
- [ ] Architecture descriptions align with current system implementation
- [ ] Feature descriptions match actual user-facing functionality

### Integration Verification
- [ ] Updated content maintains consistent voice with existing documentation
- [ ] Cross-references and internal links remain functional
- [ ] Document navigation and organization remain intuitive
- [ ] Updated sections integrate seamlessly with unchanged content
- [ ] Overall documentation suite maintains coherent structure

### Stakeholder Verification
- [ ] Updates serve same audience needs as original documentation
- [ ] Technical depth remains appropriate for intended users
- [ ] Business context and user value remain clear and accurate
- [ ] Operational procedures remain actionable and complete

## Success Metrics

**Immediate Indicators**:
- Only genuinely outdated sections are modified
- All updates accurately reflect current codebase state
- Original documentation quality and structure are preserved
- Cross-document consistency is maintained throughout

**Long-term Value**:
- Documentation synchronization reduces manual maintenance overhead
- Stakeholder confidence in documentation accuracy is restored
- Development team productivity improves through reliable documentation
- Onboarding and operational efficiency are enhanced through current information

Execute this protocol systematically, ensuring each phase builds comprehensive understanding before implementing selective, precise updates to the existing documentation suite.
Documentation Style
cursor
development
You must adhere to these comprehensive style guidelines to ensure consistent, professional, and effective documentation across all content.

## Voice and Tone Framework

### Professional Authority
- **Confident Expertise**: Write with the assurance of deep technical knowledge while remaining humble and helpful
- **Supportive Guidance**: Use language that builds reader confidence rather than highlighting their potential inexperience
- **Clear Direction**: Provide definitive guidance without hedge words that create uncertainty ("might," "could," "possibly")
- **Respectful Intelligence**: Assume readers are capable and intelligent while providing necessary context

### Audience-Appropriate Communication
- **Technical Precision**: Use accurate terminology while defining concepts appropriately for intended audience
- **Context Awareness**: Provide sufficient background without over-explaining concepts readers already understand
- **Progressive Complexity**: Build from foundational concepts to advanced implementation details
- **Inclusive Language**: Use welcoming, accessible language that serves diverse technical backgrounds

## Writing Mechanics Standards

### Active Voice Priority
- **Direct Action**: Use active voice for 80%+ of instructional content
- **Clear Responsibility**: Specify who performs each action ("Run this command" not "This command should be run")
- **Immediate Instructions**: Write steps as direct commands ("Configure the database" not "The database can be configured")
- **Passive Voice Exceptions**: Use passive voice only when the actor is unknown or irrelevant

### Sentence Structure
- **Concise Clarity**: Average 15-20 words per sentence for optimal comprehension
- **Varied Length**: Mix short (5-10 words) and medium (15-25 words) sentences for engaging rhythm
- **Parallel Structure**: Use consistent grammatical patterns in lists and step sequences
- **Clear Antecedents**: Ensure pronouns clearly reference their intended nouns

### Word Choice Standards
- **Specific Verbs**: Choose precise action words ("configure," "initialize," "deploy") over generic ones ("do," "make," "handle")
- **Consistent Terminology**: Use identical terms for identical concepts throughout all documentation
- **Plain Language**: Prefer simple, clear words over complex alternatives when meaning is equivalent
- **Jargon Management**: Define technical terms on first use and maintain consistent definitions

## Content Organization Principles

### Information Hierarchy
- **Logical Progression**: Organize information in the order readers need to encounter it
- **Scannable Structure**: Use headings, bullets, and formatting to support quick information location
- **Progressive Disclosure**: Present overview information before detailed implementation steps
- **Cross-Reference Integration**: Link related concepts using consistent terminology and clear navigation paths

### Instructional Design
- **Goal-Oriented Structure**: Organize content around what readers need to accomplish
- **Prerequisites Clarity**: Explicitly state required knowledge, tools, or setup before instruction sequences
- **Success Validation**: Provide clear indicators for readers to confirm successful completion of steps
- **Error Guidance**: Anticipate common issues and provide specific troubleshooting direction

## Professional Standards

### Credibility Indicators
- **Technical Accuracy**: Ensure all statements, code examples, and procedures are factually correct
- **Current Information**: Verify that all content reflects current system state and best practices
- **Complete Coverage**: Address all aspects necessary for reader success without gaps
- **Tested Procedures**: Confirm that all instructions have been validated and produce expected results

### Accessibility Principles
- **Inclusive Language**: Use gender-neutral, culturally sensitive, and ability-inclusive terminology
- **Clear Communication**: Avoid idioms, cultural references, or colloquialisms that may not translate across audiences
- **Multiple Learning Styles**: Support different information processing preferences through varied formatting
- **Assumption Documentation**: Explicitly state background knowledge or environmental assumptions

## Formatting and Presentation

### Visual Hierarchy
- **Consistent Heading Structure**: Use markdown headings systematically to create clear information architecture
- **Code Formatting**: Apply appropriate syntax highlighting and clear code block boundaries
- **Emphasis Usage**: Use **bold** for important terms and *italics* for emphasis sparingly and consistently
- **List Organization**: Structure information using bullets, numbers, and nested lists for optimal clarity

### Cross-Reference Standards
- **Consistent Linking**: Use identical link text for identical destinations throughout documentation
- **Descriptive Links**: Make link text clearly indicate destination content ("See Architecture Overview" not "Click here")
- **Reference Integration**: Seamlessly integrate cross-references into natural sentence flow
- **Navigation Support**: Provide clear pathways between related documentation sections

## Quality Assurance Requirements

### Content Validation
- **Clarity Testing**: Ensure sentences can be understood on first reading by intended audience
- **Accuracy Verification**: Confirm all technical details match current system implementation
- **Completeness Checking**: Verify that readers have sufficient information to accomplish stated goals
- **Consistency Auditing**: Maintain unified terminology, style, and formatting throughout all content

### Professional Standards
- **Error-Free Presentation**: Eliminate grammatical errors, typos, and formatting inconsistencies
- **Professional Tone**: Balance technical authority with approachable helpfulness
- **Organizational Alignment**: Ensure documentation voice reflects broader company communication standards
- **Industry Best Practices**: Apply current professional technical writing standards consistently

Apply these style standards consistently throughout all documentation generation, ensuring that every piece of content reflects professional expertise while serving reader needs effectively.
Product Specification
cursor
development
Create Product Specification
cursor
development
You are a systematic product specification architect. Your role is to guide developers through creating comprehensive product specifications optimized for LLM-assisted development. Transform high-level product ideas into structured, implementation-ready documentation.

## Core Process

Work through each section systematically, asking targeted questions to extract complete information before proceeding to the next section. Do not advance until each section is thoroughly defined.

### Section 1: Product Foundation
Extract and define:
- **Product Purpose**: What core problem does this solve? What is the primary user value?
- **Success Metrics**: How will you measure if this product succeeds? Define 2-3 specific, measurable outcomes.
- **Target Users**: Who will use this product? What are their technical skill levels and primary use cases?
- **Scope Boundaries**: What will this product NOT do? What features are explicitly out of scope for the initial version?

### Section 2: Technical Architecture
Define the technical foundation:
- **Technology Stack**: What languages, frameworks, databases, and services will you use? Why these choices?
- **System Architecture**: How will the major components interact? What are the primary data flows?
- **External Dependencies**: What third-party services, APIs, or libraries are required?
- **Performance Requirements**: What are the speed, scalability, and reliability expectations?
- **Security Considerations**: What data needs protection? What are the security requirements?

### Section 3: Feature Specification
Break down functionality systematically:
- **Core Features**: List 3-5 essential features that define the product's value
- **Feature Priority**: Rank features by development priority (P0, P1, P2)
- **User Stories**: For each P0 feature, define: "As a [user type], I want [capability] so that [benefit]"
- **Acceptance Criteria**: For each user story, define specific, testable conditions that constitute "done"
- **Feature Dependencies**: Which features must be built before others? What are the logical dependencies?

### Section 4: Implementation Constraints
Identify limitations and requirements:
- **Resource Constraints**: What are your time, budget, or skill limitations?
- **Technical Constraints**: What existing systems must you integrate with? What are the platform requirements?
- **Business Constraints**: What regulatory, legal, or policy requirements must be met?
- **Performance Constraints**: What are the maximum acceptable response times, concurrent users, or data limits?

### Section 5: Development Roadmap
Structure the implementation approach:
- **Phase Breakdown**: Divide development into 2-4 phases, each delivering working functionality
- **Phase Priorities**: What features belong in each phase? What constitutes a minimum viable version?
- **Risk Assessment**: What are the highest technical risks? Which components are you most uncertain about?
- **Integration Points**: Where will different components need to connect? What are the critical integration challenges?

## Quality Checklist

Before finalizing, verify the specification includes:
- [ ] Clear, measurable success criteria
- [ ] Specific technology choices with rationale
- [ ] Testable user stories and acceptance criteria
- [ ] Realistic scope boundaries and constraints
- [ ] Logical feature dependencies and phasing
- [ ] Risk identification and mitigation approaches
- [ ] AI-optimized context and instruction formatting
Product Specification Outline
cursor
development
Structure all product specifications using this standardized format for professional documentation. This format ensures consistency, stakeholder accessibility, and enterprise-grade presentation across all product specification documents.

## Document Structure Template

```markdown
# Product Specification: [Product Name]
**Document Version:** [Version Number] | **Date:** [Creation/Update Date] | **Author(s):** [Name(s)]

---

## Executive Summary

### 1.1 Product Overview
[2-3 sentence product description and primary value proposition]

### 1.2 Key Objectives  
[3-5 bullet points of primary goals this product will achieve]

### 1.3 Success Metrics
[2-3 measurable outcomes that define product success]

### 1.4 Resource Requirements
[High-level time, budget, and team size estimates]

---

## 2. Product Foundation

### 2.1 Purpose Statement
**Problem Being Solved:** [Clear description of the core problem]

**Target Value:** [Specific user/business value being delivered]

**Market Context:** [Why this product is needed now]

### 2.2 Target Users
| User Type | Technical Level | Primary Use Case | Key Requirements |
|-----------|----------------|------------------|------------------|
| [User 1] | [Beginner/Intermediate/Advanced] | [Primary task] | [Critical needs] |
| [User 2] | [Beginner/Intermediate/Advanced] | [Primary task] | [Critical needs] |

### 2.3 Scope Definition
**In Scope:**
- [Feature/capability 1]
- [Feature/capability 2]
- [Feature/capability 3]

**Out of Scope:**
- [Explicitly excluded item 1]
- [Explicitly excluded item 2]
- [Explicitly excluded item 3]

---

## 3. Technical Architecture

### 3.1 Technology Stack
**Frontend:** [Languages, frameworks, libraries]
**Backend:** [Languages, frameworks, databases]
**Infrastructure:** [Hosting, services, deployment tools]
**Rationale:** [Why these technology choices were made]

### 3.2 System Architecture
```
[High-level system diagram or description]
Component A ↔ Component B ↔ Component C
     ↓              ↓              ↓
  Database    External API    File Storage
```

### 3.3 Data Flow
1. **Input:** [How data enters the system]
2. **Processing:** [How data is transformed/handled]
3. **Storage:** [How/where data is persisted]
4. **Output:** [How data is presented/delivered]

### 3.4 External Dependencies
| Dependency | Purpose | Criticality | Fallback Plan |
|------------|---------|-------------|---------------|
| [Service/API 1] | [What it provides] | [High/Medium/Low] | [Alternative approach] |
| [Service/API 2] | [What it provides] | [High/Medium/Low] | [Alternative approach] |

### 3.5 Performance & Security Requirements
**Performance Targets:**
- Response Time: [Maximum acceptable latency]
- Concurrent Users: [Expected load capacity]
- Data Throughput: [Processing requirements]

**Security Requirements:**
- Data Protection: [What data needs encryption/protection]
- Authentication: [User verification requirements]
- Authorization: [Access control specifications]

---

## 4. Feature Specifications

### 4.1 Core Features Overview
| Feature | Priority | Complexity | Dependencies |
|---------|----------|------------|--------------|
| [Feature 1] | P0 | [High/Medium/Low] | [Required features] |
| [Feature 2] | P0 | [High/Medium/Low] | [Required features] |
| [Feature 3] | P1 | [High/Medium/Low] | [Required features] |

### 4.2 Detailed Feature Specifications

#### 4.2.1 [Feature Name] (Priority: P0)
**User Story:** As a [user type], I want [capability] so that [benefit].

**Acceptance Criteria:**
- [ ] [Specific testable condition 1]
- [ ] [Specific testable condition 2]
- [ ] [Specific testable condition 3]
- [ ] [Specific testable condition 4]

**Technical Notes:** [Implementation considerations, edge cases, special requirements]

#### 4.2.2 [Feature Name] (Priority: P0)
**User Story:** As a [user type], I want [capability] so that [benefit].

**Acceptance Criteria:**
- [ ] [Specific testable condition 1]  
- [ ] [Specific testable condition 2]
- [ ] [Specific testable condition 3]

**Technical Notes:** [Implementation considerations, edge cases, special requirements]

### 4.3 Feature Dependency Map
```
[Feature A] → [Feature B] → [Feature D]
     ↓              ↓
[Feature C] → [Feature E]
```

---

## 5. Implementation Constraints

### 5.1 Resource Constraints
**Timeline:** [Available development time]
**Budget:** [Financial limitations or considerations]
**Team:** [Available skills and capacity]
**Tools:** [Available development tools and licenses]

### 5.2 Technical Constraints
**Platform Requirements:** [OS, browser, device compatibility needs]
**Integration Requirements:** [Existing systems that must be connected]
**Legacy Compatibility:** [Backwards compatibility requirements]
**Third-Party Limitations:** [External service restrictions]

### 5.3 Business Constraints
**Regulatory Requirements:** [Compliance needs - GDPR, HIPAA, etc.]
**Legal Constraints:** [Licensing, intellectual property considerations]
**Policy Requirements:** [Organizational policies that must be followed]
**Market Timing:** [Release timing constraints or opportunities]

### 5.4 Performance Constraints
**Response Time Limits:** [Maximum acceptable latency for different operations]
**Scalability Targets:** [Expected user growth and load requirements]
**Resource Limitations:** [Memory, CPU, bandwidth constraints]
**Availability Requirements:** [Uptime expectations and maintenance windows]

---

## 6. Development Roadmap

### 6.1 Development Phases

#### Phase 1: [Phase Name] (Duration: [Timeframe])
**Objectives:** [What this phase accomplishes]

**Features Included:**
- [Feature 1] - [Brief description]
- [Feature 2] - [Brief description]
- [Feature 3] - [Brief description]

**Success Criteria:**
- [ ] [Measurable completion criterion 1]
- [ ] [Measurable completion criterion 2]
- [ ] [Measurable completion criterion 3]

**Deliverables:** [Specific outputs - MVP, beta version, etc.]

#### Phase 2: [Phase Name] (Duration: [Timeframe])
**Objectives:** [What this phase accomplishes]

**Features Included:**
- [Feature 4] - [Brief description]
- [Feature 5] - [Brief description]

**Success Criteria:**
- [ ] [Measurable completion criterion 1]
- [ ] [Measurable completion criterion 2]

**Deliverables:** [Specific outputs]

### 6.2 Risk Assessment

#### High Risk Items
| Risk | Impact | Likelihood | Mitigation Strategy |
|------|--------|------------|-------------------|
| [Technical risk 1] | [High/Medium/Low] | [High/Medium/Low] | [How to address] |
| [Resource risk 1] | [High/Medium/Low] | [High/Medium/Low] | [How to address] |

#### Medium Risk Items
| Risk | Impact | Likelihood | Mitigation Strategy |
|------|--------|------------|-------------------|
| [Risk 1] | [High/Medium/Low] | [High/Medium/Low] | [How to address] |
| [Risk 2] | [High/Medium/Low] | [High/Medium/Low] | [How to address] |

### 6.3 Critical Integration Points
1. **[Integration Point 1]:** [Description of complexity and approach]
2. **[Integration Point 2]:** [Description of complexity and approach]
3. **[Integration Point 3]:** [Description of complexity and approach]

---

## 7. Appendices

### 7.1 Glossary
| Term | Definition |
|------|------------|
| [Technical term 1] | [Clear definition] |
| [Business term 1] | [Clear definition] |
| [Acronym 1] | [Full form and meaning] |

### 7.2 References
- [External document/resource 1]
- [External document/resource 2]
- [Standards or guidelines referenced]

### 7.3 Revision History
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Author] | Initial specification |
| 1.1 | [Date] | [Author] | [Summary of changes] |

---

**Document Status:** [Draft/Review/Approved/Archived]
**Next Review Date:** [Date]
**Approval Required From:** [Stakeholder names/roles]
```

## Formatting Guidelines

### Typography Standards
- **Document Title:** H1 with product name
- **Major Sections:** H2 with numbering (1., 2., 3.)
- **Subsections:** H3 with decimal numbering (1.1, 1.2, 1.3)
- **Detail Sections:** H4 with full numbering (1.1.1, 1.1.2)

### Visual Elements
- **Tables:** Used for structured comparisons and specifications
- **Checklists:** Used for acceptance criteria and success metrics
- **Code Blocks:** Used for technical diagrams and data flows
- **Horizontal Rules:** Used to separate major document sections

### Content Organization Principles
1. **Executive Summary First:** Key information for leadership review
2. **Progressive Detail:** General to specific information flow
3. **Logical Dependencies:** Technical foundation before feature details
4. **Implementation Focus:** Roadmap and constraints near the end
5. **Reference Materials:** Appendices for supporting information
Documentation Outline
cursor
development
# Format: Professional Documentation Suite

You will generate a complete documentation package organized as follows:

## Document Structure
Create exactly these files in order:
1. **README.md** - Project overview and quick start
2. **ARCHITECTURE.md** - System design and component relationships  
3. **FEATURES.md** - User functionality mapped to technical implementation
4. **SETUP.md** - Development environment and deployment procedures
5. **API.md** - Interface specifications (if applicable)
6. **MAINTENANCE.md** - Operational procedures and troubleshooting

## Content Standards
- Use consistent markdown formatting throughout all documents
- Include table of contents for documents longer than 100 lines
- Cross-reference between documents using relative links
- Maintain professional tone suitable for technical and business audiences
- Include code examples with syntax highlighting
- Use diagrams and visual aids where they enhance understanding

## Document Templates
Each document must follow industry-standard templates with required sections clearly marked. Use consistent heading hierarchy and formatting patterns across all documentation files.

## Quality Assurance
- Verify all setup instructions are complete and actionable
- Ensure code examples match actual implementation
- Validate that cross-references between documents are accurate
- Test that documentation serves both technical and non-technical readers appropriately
Imported