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
  M("Learn Gitpod", "introduction/learn-gitpod", [
    M(
      "One workspace per task",
      "introduction/learn-gitpod/one-workspace-per-task"
    ),
    M(
      "The life of a workspace",
      "introduction/learn-gitpod/the-life-of-a-workspace"
    ),
    M("Context URL", "introduction/learn-gitpod/context-url"),
  ]),
  M("Languages", "introduction/languages", [
    M("JavaScript", "introduction/languages/javascript"),
    M("Python", "introduction/languages/python"),
    M("Java", "introduction/languages/java"),
    M("Go", "introduction/languages/go"),
    M("Rust", "introduction/languages/rust"),
  ]),

  M("Teams", "configure/teams", [
    M("Billing", "configure/teams/billing", [], "beta"),
    M("Plans", "configure/teams/plans", []),
  ]),

  M("Projects", "configure/projects", [
    M(".gitpod.yml", "configure/projects/gitpod-yaml"),
    // Why is this side bar name different to the title / URL?
    M("Tasks", "configure/projects/tasks"),
    M("Ports", "configure/projects/ports"),
    M("Prebuilds", "configure/projects/prebuilds"),
    M("Environment Variables", "configure/projects/environment-variables"),
    M("Workspace location", "configure/projects/workspace-location"),
    M("Multi-repo", "configure/projects/multi-repo", [], "beta"),
  ]),

  M("Users", "configure/users", [
    M("Browser settings", "configure/users/browser-settings"),
    M("Dotfiles", "configure/users/dotfiles", []),
    M("SSH", "configure/users/ssh"),
    M("Browser bookmarklet", "configure/users/browser-bookmarklet"),
    M("Browser extension", "configure/users/browser-extension"),
  ]),

  M("Workspaces", "configure/workspaces", [
    M("Collaboration", "configure/workspaces/collaboration", [], "beta"),
  ]),

  M("Authentication", "configure/authentication", [
    M("GitLab", "configure/authentication/gitlab"),
    M("GitHub", "configure/authentication/github"),
    M("Bitbucket", "configure/authentication/bitbucket"),
    M("GitHub Enterprise", "configure/authentication/github-enterprise"),
    M("Bitbucket Server", "configure/authentication/bitbucket-server"),
  ]),
  M("Self-Hosted", "configure/self-hosted/latest", [
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
  M("IDEs & editors", "references/ides-and-editors", [
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
    M("VS Code Extensions", "references/ides-and-editors/vscode-extensions"),
    M("VS Code Settings Sync", "references/ides-and-editors/settings-sync"),
    M("Command Line (SSH)", "references/ides-and-editors/command-line", []),
    M("FAQs", "references/ides-and-editors/faqs", []),
  ]),
  M("Integrations", "integrations", [
    M("Tailscale", "integrations/tailscale"),
    M("Docker", "integrations/docker"),
    M("JetBrains Gateway", "integrations/jetbrains-gateway", [], "beta"),
  ]),
  M("gp CLI", "references/gp-cli"),
  // M("Custom Docker image", "references/gitpod-dockerfile"),
  // M("Architecture", "references/architecture"),
  M("Contribute", "support/contribute", [
    M("Content", "support/contribute/content"),
    M("Documentation", "support/contribute/documentation"),
    M("Features & Patches", "support/contribute/features-and-patches"),
  ]),
  M("Release cycle", "support/release-cycle"),
  M("Public roadmap", "support/public-roadmap"),

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
