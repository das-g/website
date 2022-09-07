import type { MenuStatus, MenuEntry } from "$lib/types/menu-entry.type";

function M(
  title: string,
  path: string,
  subMenu?: MenuEntry[],
  status?: MenuStatus
): MenuEntry {
  return {
    title,
    status,
    path: "/docs" + (path ? "/" + path : ""),
    subMenu,
  };
}

export const MENU: MenuEntry[] = [
  M("Getting Started", "introduction/getting-started"),
  M("Learn Gitpod", "introduction/learn", [
    M("One workspace per task", "introduction/learn/workspaces"),
    M("Life of a workspace", "introduction/learn/life-of-workspace"),
    M("Contexts", "introduction/learn/context-urls"),
    M(
      "Collaboration & Sharing",
      "introduction/learn/sharing-and-collaboration"
    ),
  ]),
  M("Languages", "introduction/languages", [
    M("JavaScript", "introduction/languages/javascript"),
    M("Python", "introduction/languages/python"),
    M("Java", "introduction/languages/java"),
    M("Go", "introduction/languages/go"),
    M("Rust", "introduction/languages/rust"),
  ]),
  M("Configure a Team", "configure/teams", [
    M("Teams & Projects", "configure/teams/teams-and-projects", [], "beta"),
    M("Team Billing", "configure/teams/team-billing", [], "beta"),
    M("Create a Team Plan", "configure/teams/teams", []),
  ]),
  M("Configure a Project", "configure/projects", [
    M(".gitpod.yml", "configure/projects/config-gitpod-file"),
    // Why is this side bar name different to the title / URL?
    M("Docker", "configure/projects/config-docker"),
    M("Start Tasks", "configure/projects/config-start-tasks"),
    M("Ports", "configure/projects/config-ports"),
    M("Prebuilds", "configure/projects/prebuilds"),
    M("Environment Variables", "configure/projects/environment-variables"),
    M("Network Bridging", "configure/projects/tailscale"),
    M("Workspace Location", "configure/projects/checkout-location"),
    M("Multi-Repo", "configure/projects/multi-repo-workspaces", [], "beta"),
  ]),
  M("Configure a User", "configure/users", [
    M("Browser Settings", "configure/users/browser-settings"),
    M("Dotfiles", "configure/users/config-dotfiles", []),
    M("SSH", "configure/users/ssh"),
    M("Browser Bookmarklet", "configure/users/browser-bookmarklet"),
    M("Browser Extension", "configure/users/browser-extension"),
  ]),
  M("Gitpod Self-Hosted", "configure/self-hosted/latest", [
    M(
      "Installation Guides",
      "configure/self-hosted/latest/installation-guides",
      [
        M(
          "Local Preview",
          "configure/self-hosted/latest/local-preview",
          [],
          "alpha"
        ),
        M("Getting Started", "configure/self-hosted/latest/getting-started"),
        M(
          "Reference Architectures",
          "configure/self-hosted/latest/reference-architecture",
          [],
          "alpha"
        ),
        M("Cluster Set-Up", "configure/self-hosted/latest/cluster-set-up"),
        M("Advanced Installation", "configure/self-hosted/latest/advanced"),
      ]
    ),
    M("Operational Guides", "configure/self-hosted/latest/operational-guides", [
      M("Updating", "configure/self-hosted/latest/updating"),
      M("Monitoring", "configure/self-hosted/latest/monitoring"),
      M("Backing Up", "configure/self-hosted/latest/backup-restore"),
    ]),
    M("Troubleshooting", "configure/self-hosted/latest/troubleshooting", [
      M("Support Bundles", "configure/self-hosted/latest/support-bundle", []),
      M("Config Patches", "configure/self-hosted/latest/config-patches", []),
    ]),
    M("Background", "configure/self-hosted/latest/background", [
      M("Disaster Recovery", "configure/self-hosted/latest/disaster-recovery"),
    ]),
    M("Reference", "configure/self-hosted/latest/reference", [
      M(
        "Required Components",
        "configure/self-hosted/latest/required-components"
      ),
      M("Telemetry", "configure/self-hosted/latest/telemetry"),
      M("Release Policies", "configure/self-hosted/latest/releases"),
      M("Upgrade Guides", "configure/self-hosted/latest/upgrade-guides"),
    ]),
  ]),
  M(".gitpod.yml", "references/gitpod-yml"),
  M("Authentication", "references/authentication", [
    M("GitLab", "references/authentication/gitlab-integration"),
    M("GitHub", "references/authentication/github-integration"),
    M("Bitbucket", "references/authentication/bitbucket-integration"),
    M(
      "GitHub Enterprise",
      "references/authentication/github-enterprise-integration"
    ),
    M(
      "Bitbucket Server",
      "references/authentication/bitbucket-server-integration"
    ),
  ]),
  M("IDEs & Editors", "references/ides-and-editors", [
    M("VS Code Browser", "references/ides-and-editors/vscode-browser"),
    M("VS Code Desktop", "references/ides-and-editors/vscode", [], "beta"),
    M("IntelliJ IDEA", "references/ides-and-editors/intellij", [], "beta"),
    M("GoLand", "references/ides-and-editors/goland", [], "beta"),
    M("PhpStorm", "references/ides-and-editors/phpstorm", [], "beta"),
    M("PyCharm", "references/ides-and-editors/pycharm", [], "beta"),
    M("CLion", "references/ides-and-editors/clion", [], "soon"),
    M("Rider", "references/ides-and-editors/rider", [], "soon"),
    M("RubyMine", "references/ides-and-editors/rubymine", [], "soon"),
    M("WebStorm", "references/ides-and-editors/webstorm", [], "soon"),
    M(
      "Local Companion",
      "references/ides-and-editors/local-companion",
      [],
      "beta"
    ),
    M(
      "JetBrains Gateway",
      "references/ides-and-editors/jetbrains-gateway",
      [],
      "beta"
    ),
    M("VS Code Extensions", "references/ides-and-editors/vscode-extensions"),
    M("VS Code Settings Sync", "references/ides-and-editors/settings-sync"),
    M("Command Line (SSH)", "references/ides-and-editors/command-line", []),
    M("FAQs", "references/ides-and-editors/faqs", []),
  ]),
  M("Command Line Interface", "references/command-line-interface"),
  // M("Custom Docker image", "references/gitpod-dockerfile"),
  // M("Architecture", "references/architecture"),
  M("Contribute", "support/contribute", [
    M("Content", "support/contribute/content"),
    M("Documentation", "support/contribute/documentation"),
    M("Features & Patches", "support/contribute/features-and-patches"),
  ]),
  M("Roadmap", "support/roadmap"),
  M("Gitpod Releases", "support/gitpod-releases"),
  M("Troubleshooting", "support/troubleshooting", []),
];

export interface MenuContext {
  prev?: MenuEntry;
  thisEntry?: MenuEntry;
  next?: MenuEntry;
}

export function getMenuContext(
  slug: string,
  menu: MenuEntry[] = MENU,
  context: MenuContext = {}
): MenuContext {
  for (const e of menu) {
    if (context.next) {
      return context;
    }
    if (context.thisEntry) {
      context.next = e;
      return context;
    } else if (e.path === slug) {
      context.thisEntry = e;
    } else {
      context.prev = e;
    }
    if (e.subMenu) {
      getMenuContext(slug, e.subMenu, context);
    }
  }
  return context;
}
