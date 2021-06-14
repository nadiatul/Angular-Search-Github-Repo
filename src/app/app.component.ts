import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { GithubService } from './serivces/github.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface UserDetail {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string;
  fork: false;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
}

const ELEMENT_DATA: UserDetail[] = [
  {
    id: 1,
    node_id: 'MDEwOlJlcG9zaXRvcnkx',
    name: 'grit',
    full_name: 'mojombo/grit',
    private: false,
    owner: {
      login: 'mojombo',
      id: 1,
      node_id: 'MDQ6VXNlcjE=',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/mojombo',
      html_url: 'https://github.com/mojombo',
      followers_url: 'https://api.github.com/users/mojombo/followers',
      following_url:
        'https://api.github.com/users/mojombo/following{/other_user}',
      gists_url: 'https://api.github.com/users/mojombo/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/mojombo/subscriptions',
      organizations_url: 'https://api.github.com/users/mojombo/orgs',
      repos_url: 'https://api.github.com/users/mojombo/repos',
      events_url: 'https://api.github.com/users/mojombo/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/mojombo/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/mojombo/grit',
    description:
      '**Grit is no longer maintained. Check out libgit2/rugged.** Grit gives you object oriented read/write access to Git repositories via Ruby.',
    fork: false,
    url: 'https://api.github.com/repos/mojombo/grit',
    forks_url: 'https://api.github.com/repos/mojombo/grit/forks',
    keys_url: 'https://api.github.com/repos/mojombo/grit/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/mojombo/grit/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/mojombo/grit/teams',
    hooks_url: 'https://api.github.com/repos/mojombo/grit/hooks',
    issue_events_url:
      'https://api.github.com/repos/mojombo/grit/issues/events{/number}',
    events_url: 'https://api.github.com/repos/mojombo/grit/events',
    assignees_url: 'https://api.github.com/repos/mojombo/grit/assignees{/user}',
    branches_url: 'https://api.github.com/repos/mojombo/grit/branches{/branch}',
    tags_url: 'https://api.github.com/repos/mojombo/grit/tags',
    blobs_url: 'https://api.github.com/repos/mojombo/grit/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/mojombo/grit/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/mojombo/grit/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/mojombo/grit/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/mojombo/grit/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/mojombo/grit/languages',
    stargazers_url: 'https://api.github.com/repos/mojombo/grit/stargazers',
    contributors_url: 'https://api.github.com/repos/mojombo/grit/contributors',
    subscribers_url: 'https://api.github.com/repos/mojombo/grit/subscribers',
    subscription_url: 'https://api.github.com/repos/mojombo/grit/subscription',
    commits_url: 'https://api.github.com/repos/mojombo/grit/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/mojombo/grit/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/mojombo/grit/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/mojombo/grit/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/mojombo/grit/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/mojombo/grit/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/mojombo/grit/merges',
    archive_url:
      'https://api.github.com/repos/mojombo/grit/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/mojombo/grit/downloads',
    issues_url: 'https://api.github.com/repos/mojombo/grit/issues{/number}',
    pulls_url: 'https://api.github.com/repos/mojombo/grit/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/mojombo/grit/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/mojombo/grit/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/mojombo/grit/labels{/name}',
    releases_url: 'https://api.github.com/repos/mojombo/grit/releases{/id}',
    deployments_url: 'https://api.github.com/repos/mojombo/grit/deployments',
  },
  {
    id: 26,
    node_id: 'MDEwOlJlcG9zaXRvcnkyNg==',
    name: 'merb-core',
    full_name: 'wycats/merb-core',
    private: false,
    owner: {
      login: 'wycats',
      id: 4,
      node_id: 'MDQ6VXNlcjQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/wycats',
      html_url: 'https://github.com/wycats',
      followers_url: 'https://api.github.com/users/wycats/followers',
      following_url:
        'https://api.github.com/users/wycats/following{/other_user}',
      gists_url: 'https://api.github.com/users/wycats/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/wycats/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/wycats/subscriptions',
      organizations_url: 'https://api.github.com/users/wycats/orgs',
      repos_url: 'https://api.github.com/users/wycats/repos',
      events_url: 'https://api.github.com/users/wycats/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/wycats/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/wycats/merb-core',
    description: "Merb Core: All you need. None you don't.",
    fork: false,
    url: 'https://api.github.com/repos/wycats/merb-core',
    forks_url: 'https://api.github.com/repos/wycats/merb-core/forks',
    keys_url: 'https://api.github.com/repos/wycats/merb-core/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/wycats/merb-core/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/wycats/merb-core/teams',
    hooks_url: 'https://api.github.com/repos/wycats/merb-core/hooks',
    issue_events_url:
      'https://api.github.com/repos/wycats/merb-core/issues/events{/number}',
    events_url: 'https://api.github.com/repos/wycats/merb-core/events',
    assignees_url:
      'https://api.github.com/repos/wycats/merb-core/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/wycats/merb-core/branches{/branch}',
    tags_url: 'https://api.github.com/repos/wycats/merb-core/tags',
    blobs_url: 'https://api.github.com/repos/wycats/merb-core/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/wycats/merb-core/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/wycats/merb-core/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/wycats/merb-core/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/wycats/merb-core/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/wycats/merb-core/languages',
    stargazers_url: 'https://api.github.com/repos/wycats/merb-core/stargazers',
    contributors_url:
      'https://api.github.com/repos/wycats/merb-core/contributors',
    subscribers_url:
      'https://api.github.com/repos/wycats/merb-core/subscribers',
    subscription_url:
      'https://api.github.com/repos/wycats/merb-core/subscription',
    commits_url: 'https://api.github.com/repos/wycats/merb-core/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/wycats/merb-core/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/wycats/merb-core/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/wycats/merb-core/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/wycats/merb-core/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/wycats/merb-core/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/wycats/merb-core/merges',
    archive_url:
      'https://api.github.com/repos/wycats/merb-core/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/wycats/merb-core/downloads',
    issues_url: 'https://api.github.com/repos/wycats/merb-core/issues{/number}',
    pulls_url: 'https://api.github.com/repos/wycats/merb-core/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/wycats/merb-core/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/wycats/merb-core/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/wycats/merb-core/labels{/name}',
    releases_url: 'https://api.github.com/repos/wycats/merb-core/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/wycats/merb-core/deployments',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: any;

  title = 'angular-search-github-api';
  input: any;
  public data: any;

  displayedColumns: string[] = ['id', 'name', 'full_name'];
  dataSource = new MatTableDataSource([]);

  constructor(private githubService: GithubService) {
    this.githubService.getGithubApi().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res);
      this.reInitPaginator();
    });
  }

  ngAfterViewInit() {
    this.reInitPaginator();
  }

  reInitPaginator() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // console.log('this.datasource',this.dataSource);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

    this.convertAllLine(this.dataSource.data, filterValue)
  }

  testingFilter(input: string): any {
    return this.convertAllLine(this.dataSource.data, input);
  }

  /**
   * This line is to ensure to the test cases is being implemented properly
   *
   * @param datasourceList
   * @param input
   */
  convertAllLine(datasourceList: any, input: string): boolean{
    const newDataSource: any = [];
    let inputFalse = false;
    datasourceList.forEach((element: any) => {
      newDataSource.push(Object.values(element).join(" "));
    });
    if(newDataSource.every((e: any) => e.includes(input))) {
      console.log('test is correct');
      inputFalse = true;
    }
    return inputFalse;
  }
}
