---
sidebar_position: 1
---

# Github project Boards

Project boards on GitHub help you organize and prioritize your work. <br/>
You can create project boards for specific feature work, comprehensive roadmaps,<br/>
or even release checklists. With project boards, you have the flexibility to create <br/>
customized workflows that suit your needs.<br/>

**Note**: Projects (beta), the all-new projects experience, is now available. <br/>
For more information about projects (beta), see [About projects (beta)](https://docs.github.com/en/issues/trying-out-the-new-projects-experience/about-projects) <br/>

**Project boards** are made up of issues, pull requests, and notes that are categorized as<br/>
cards in columns of your choosing. You can drag and drop or use keyboard shortcuts to<br/> 
reorder cards within a column, move cards from column to column, and change the <br/>
order of columns. <br/>

**Project board cards** contain relevant metadata for issues and pull requests, like labels,<br/>
assignees, the status, and who opened it. You can view and make lightweight edits to issues <br/>
and pull requests within your project board by clicking on the issue or pull request's title.<br/>

You can create notes within columns to serve as task reminders, references to issues and pull <be/>
requests from any repository on GitHub.com, or to add information related to the project board. <br/>
You can create a reference card for another project board by adding a link to a note. If the <br/>
note isn't sufficient for your needs, you can convert it to an issue. For more information on <br/>
converting project board notes to issues, see [Adding notes to a project board](https://docs.github.com/en/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-notes-to-a-project-board).<br/>

Types of project boards:

- **User-owned project boards** can contain issues and pull requests from any personal repository.

- **Organization-wide project boards** can contain issues and pull requests from any repository that belongs to an organization. You can link up to twenty-five repositories to your organization or user-owned project board. Linking repositories makes it easier to add issues and pull requests from those repositories to your project board using  Add cards or from the issue or pull requests sidebar. For more information, see ["Linking a repository to a project board."](https://docs.github.com/en/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)

- **Repository project boards** are scoped to issues and pull requests within a single repository. They can also include notes that reference issues and pull requests in other repositories.


### Creating and viewing project boards

To create a project board for your organization, you must be an organization member. Organization
owners and people with project board admin permissions can customize access to the project board.

If an organization-owned project board includes issues or pull requests from a repository that you don't have permission to view, the card will be redacted. For more information, see ["Project board permissions for an organization."](https://docs.github.com/en/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)

The activity view shows the project board's recent history, such as cards someone created or moved between columns. To access the activity view, click Menu and scroll down.

To find specific cards on a project board or view a subset of the cards, you can filter project board cards. For more information, see ["Filtering cards on a project board."](https://docs.github.com/en/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)

To simplify your workflow and keep completed tasks off your project board, you can archive cards. For more information, see ["Archiving cards on a project board."](https://docs.github.com/en/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/archiving-cards-on-a-project-board)

If you've completed all of your project board tasks or no longer need to use your project board, you can close the project board. For more information, see ["Closing a project board."](https://docs.github.com/en/issues/organizing-your-work-with-project-boards/managing-project-boards/closing-a-project-board)

You can also [disable project boards in a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/disabling-project-boards-in-a-repository) or [disable project boards in your organization](https://docs.github.com/en/organizations/managing-organization-settings/disabling-project-boards-in-your-organization), if you prefer to track your work in a different way.

You can use GitHub's API to import a project board. For more information, see ["importProject."](https://docs.github.com/en/graphql/reference/mutations#importproject)


### Templates for project boards

You can use templates to quickly set up a new project board. When you use a template to create a project board, your new board will include columns as well as cards with tips for using project boards. You can also choose a template with automation already configured.

| Template      |  Description |
| ------------- | ------------- |
| Basic kanban | Track your tasks with To do, In progress, and Done columns  |
| Automated kanban  | Cards automatically move between To do, In progress, and Done columns  |
| Automated kanban with review |  Cards automatically move between To do, In progress, and Done columns, with additional triggers for pull request review status  |
| Bug triage | Triage and prioritize bugs with To do, High priority, Low priority, and Closed columns |

For more information on automation for project boards, see ["About automation for project boards."](https://docs.github.com/en/issues/organizing-your-work-with-project-boards/managing-project-boards/about-automation-for-project-boards)