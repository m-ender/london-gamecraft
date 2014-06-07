




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>threex.keyboardstate/threex.keyboardstate.js at master · jeromeetienne/threex.keyboardstate · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jeromeetienne/threex.keyboardstate" name="twitter:title" /><meta content="threex.keyboardstate - three.js extension to keep the current state of the keyboard" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/252962?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/252962?s=400" property="og:image" /><meta content="jeromeetienne/threex.keyboardstate" property="og:title" /><meta content="https://github.com/jeromeetienne/threex.keyboardstate" property="og:url" /><meta content="threex.keyboardstate - three.js extension to keep the current state of the keyboard" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="52258660:089E:E6DE55C:538BA042" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="w7dE2ydMCUQ0SyRf4jcckTW4f25f06CUTEV1778CT6R6kVy0x1WeDQOHguicoRwyIDtNEhT0gFjrMvyEDfl/yw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-382e2d2394fe36287509f9d88e1aae81a78b71b2.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-68f308ed3df6360990cad61e748100286688ace6.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="0a1f007a804ec5e0a6b81786356373f8">

      
  <meta name="description" content="threex.keyboardstate - three.js extension to keep the current state of the keyboard" />

  <meta content="252962" name="octolytics-dimension-user_id" /><meta content="jeromeetienne" name="octolytics-dimension-user_login" /><meta content="12186036" name="octolytics-dimension-repository_id" /><meta content="jeromeetienne/threex.keyboardstate" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="12186036" name="octolytics-dimension-repository_network_root_id" /><meta content="jeromeetienne/threex.keyboardstate" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jeromeetienne/threex.keyboardstate/commits/master.atom" rel="alternate" title="Recent Commits to threex.keyboardstate:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fjeromeetienne%2Fthreex.keyboardstate%2Fblob%2Fmaster%2Fthreex.keyboardstate.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="jeromeetienne/threex.keyboardstate"
      data-branch="master"
      data-sha="6e7920204d02de96bc708745928256040e02a9b3"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="jeromeetienne/threex.keyboardstate" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fjeromeetienne%2Fthreex.keyboardstate"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/jeromeetienne/threex.keyboardstate/stargazers">
      8
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fjeromeetienne%2Fthreex.keyboardstate"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>Fork
      </a>
      <a href="/jeromeetienne/threex.keyboardstate/network" class="social-count">
        2
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/jeromeetienne" class="url fn" itemprop="url" rel="author"><span itemprop="title">jeromeetienne</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/jeromeetienne/threex.keyboardstate" class="js-current-repository js-repo-home-link">threex.keyboardstate</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/jeromeetienne/threex.keyboardstate" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jeromeetienne/threex.keyboardstate">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/jeromeetienne/threex.keyboardstate/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /jeromeetienne/threex.keyboardstate/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/jeromeetienne/threex.keyboardstate/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /jeromeetienne/threex.keyboardstate/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/jeromeetienne/threex.keyboardstate/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /jeromeetienne/threex.keyboardstate/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/jeromeetienne/threex.keyboardstate/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /jeromeetienne/threex.keyboardstate/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/jeromeetienne/threex.keyboardstate/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /jeromeetienne/threex.keyboardstate/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/jeromeetienne/threex.keyboardstate.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jeromeetienne/threex.keyboardstate.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/jeromeetienne/threex.keyboardstate" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jeromeetienne/threex.keyboardstate" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save jeromeetienne/threex.keyboardstate to your computer and use it in GitHub Desktop." aria-label="Save jeromeetienne/threex.keyboardstate to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/jeromeetienne/threex.keyboardstate/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download jeromeetienne/threex.keyboardstate as a zip file"
                   title="Download jeromeetienne/threex.keyboardstate as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/jeromeetienne/threex.keyboardstate/blob/803a1c24882ee29baaa55e9da3e5b0ae968f6a32/threex.keyboardstate.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:d88687cbcab24a5c7e940dce9c1645ab -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/jeromeetienne/threex.keyboardstate/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromeetienne/threex.keyboardstate/blob/gh-pages/threex.keyboardstate.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromeetienne/threex.keyboardstate/blob/master/threex.keyboardstate.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jeromeetienne/threex.keyboardstate" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">threex.keyboardstate</span></a></span></span><span class="separator"> / </span><strong class="final-path">threex.keyboardstate.js</strong> <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="threex.keyboardstate.js" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Jerome Etienne" class="main-avatar js-avatar" data-user="252962" height="24" src="https://avatars3.githubusercontent.com/u/252962?s=140" width="24" />
      <span class="author"><a href="/jeromeetienne" rel="author">jeromeetienne</a></span>
      <time datetime="2013-08-17T23:31:38+02:00" is="relative-time">August 17, 2013</time>
      <div class="commit-title">
          <a href="/jeromeetienne/threex.keyboardstate/commit/96263dceacf72bd43e736ad4f368aba86b424ca8" class="message" data-pjax="true" title="import from jeromeetienne/threex">import from jeromeetienne/threex</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong>  contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Jerome Etienne" class=" js-avatar" data-user="252962" height="24" src="https://avatars3.githubusercontent.com/u/252962?s=140" width="24" />
            <a href="/jeromeetienne">jeromeetienne</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>153 lines (140 sloc)</span>
          <span class="meta-divider"></span>
        <span>4.47 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/jeromeetienne/threex.keyboardstate/raw/master/threex.keyboardstate.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/jeromeetienne/threex.keyboardstate/blame/master/threex.keyboardstate.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/jeromeetienne/threex.keyboardstate/commits/master/threex.keyboardstate.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript js-blob-data">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="c1">// THREEx.KeyboardState.js keep the current state of the keyboard.</span></div><div class='line' id='LC2'><span class="c1">// It is possible to query it at any time. No need of an event.</span></div><div class='line' id='LC3'><span class="c1">// This is particularly convenient in loop driven case, like in</span></div><div class='line' id='LC4'><span class="c1">// 3D demos or games.</span></div><div class='line' id='LC5'><span class="c1">//</span></div><div class='line' id='LC6'><span class="c1">// # Usage</span></div><div class='line' id='LC7'><span class="c1">//</span></div><div class='line' id='LC8'><span class="c1">// **Step 1**: Create the object</span></div><div class='line' id='LC9'><span class="c1">//</span></div><div class='line' id='LC10'><span class="c1">// ```var keyboard	= new THREEx.KeyboardState();```</span></div><div class='line' id='LC11'><span class="c1">//</span></div><div class='line' id='LC12'><span class="c1">// **Step 2**: Query the keyboard state</span></div><div class='line' id='LC13'><span class="c1">//</span></div><div class='line' id='LC14'><span class="c1">// This will return true if shift and A are pressed, false otherwise</span></div><div class='line' id='LC15'><span class="c1">//</span></div><div class='line' id='LC16'><span class="c1">// ```keyboard.pressed(&quot;shift+A&quot;)```</span></div><div class='line' id='LC17'><span class="c1">//</span></div><div class='line' id='LC18'><span class="c1">// **Step 3**: Stop listening to the keyboard</span></div><div class='line' id='LC19'><span class="c1">//</span></div><div class='line' id='LC20'><span class="c1">// ```keyboard.destroy()```</span></div><div class='line' id='LC21'><span class="c1">//</span></div><div class='line' id='LC22'><span class="c1">// NOTE: this library may be nice as standaline. independant from three.js</span></div><div class='line' id='LC23'><span class="c1">// - rename it keyboardForGame</span></div><div class='line' id='LC24'><span class="c1">//</span></div><div class='line' id='LC25'><span class="c1">// # Code</span></div><div class='line' id='LC26'><span class="c1">//</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'><span class="cm">/** @namespace */</span></div><div class='line' id='LC29'><span class="kd">var</span> <span class="nx">THREEx</span>	<span class="o">=</span> <span class="nx">THREEx</span> 		<span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'><span class="cm">/**</span></div><div class='line' id='LC32'><span class="cm"> * - NOTE: it would be quite easy to push event-driven too</span></div><div class='line' id='LC33'><span class="cm"> *   - microevent.js for events handling</span></div><div class='line' id='LC34'><span class="cm"> *   - in this._onkeyChange, generate a string from the DOM event</span></div><div class='line' id='LC35'><span class="cm"> *   - use this as event name</span></div><div class='line' id='LC36'><span class="cm">*/</span></div><div class='line' id='LC37'><span class="nx">THREEx</span><span class="p">.</span><span class="nx">KeyboardState</span>	<span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">domElement</span><span class="p">)</span></div><div class='line' id='LC38'><span class="p">{</span></div><div class='line' id='LC39'>	<span class="k">this</span><span class="p">.</span><span class="nx">domElement</span><span class="o">=</span> <span class="nx">domElement</span>	<span class="o">||</span> <span class="nb">document</span><span class="p">;</span></div><div class='line' id='LC40'>	<span class="c1">// to store the current state</span></div><div class='line' id='LC41'>	<span class="k">this</span><span class="p">.</span><span class="nx">keyCodes</span>	<span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC42'>	<span class="k">this</span><span class="p">.</span><span class="nx">modifiers</span>	<span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'>	<span class="c1">// create callback to bind/unbind keyboard events</span></div><div class='line' id='LC45'>	<span class="kd">var</span> <span class="nx">_this</span>	<span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC46'>	<span class="k">this</span><span class="p">.</span><span class="nx">_onKeyDown</span>	<span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">){</span> <span class="nx">_this</span><span class="p">.</span><span class="nx">_onKeyChange</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span>	<span class="p">}</span></div><div class='line' id='LC47'>	<span class="k">this</span><span class="p">.</span><span class="nx">_onKeyUp</span>	<span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">){</span> <span class="nx">_this</span><span class="p">.</span><span class="nx">_onKeyChange</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span>	<span class="p">}</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>	<span class="c1">// bind keyEvents</span></div><div class='line' id='LC50'>	<span class="k">this</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;keydown&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_onKeyDown</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC51'>	<span class="k">this</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;keyup&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_onKeyUp</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC52'><span class="p">}</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'><span class="cm">/**</span></div><div class='line' id='LC55'><span class="cm"> * To stop listening of the keyboard events</span></div><div class='line' id='LC56'><span class="cm">*/</span></div><div class='line' id='LC57'><span class="nx">THREEx</span><span class="p">.</span><span class="nx">KeyboardState</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">destroy</span>	<span class="o">=</span> <span class="kd">function</span><span class="p">()</span></div><div class='line' id='LC58'><span class="p">{</span></div><div class='line' id='LC59'>	<span class="c1">// unbind keyEvents</span></div><div class='line' id='LC60'>	<span class="k">this</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s2">&quot;keydown&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_onKeyDown</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC61'>	<span class="k">this</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s2">&quot;keyup&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_onKeyUp</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC62'><span class="p">}</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'><span class="nx">THREEx</span><span class="p">.</span><span class="nx">KeyboardState</span><span class="p">.</span><span class="nx">MODIFIERS</span>	<span class="o">=</span> <span class="p">[</span><span class="s1">&#39;shift&#39;</span><span class="p">,</span> <span class="s1">&#39;ctrl&#39;</span><span class="p">,</span> <span class="s1">&#39;alt&#39;</span><span class="p">,</span> <span class="s1">&#39;meta&#39;</span><span class="p">];</span></div><div class='line' id='LC65'><span class="nx">THREEx</span><span class="p">.</span><span class="nx">KeyboardState</span><span class="p">.</span><span class="nx">ALIAS</span>	<span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC66'>	<span class="s1">&#39;left&#39;</span>		<span class="o">:</span> <span class="mi">37</span><span class="p">,</span></div><div class='line' id='LC67'>	<span class="s1">&#39;up&#39;</span>		<span class="o">:</span> <span class="mi">38</span><span class="p">,</span></div><div class='line' id='LC68'>	<span class="s1">&#39;right&#39;</span>		<span class="o">:</span> <span class="mi">39</span><span class="p">,</span></div><div class='line' id='LC69'>	<span class="s1">&#39;down&#39;</span>		<span class="o">:</span> <span class="mi">40</span><span class="p">,</span></div><div class='line' id='LC70'>	<span class="s1">&#39;space&#39;</span>		<span class="o">:</span> <span class="mi">32</span><span class="p">,</span></div><div class='line' id='LC71'>	<span class="s1">&#39;pageup&#39;</span>	<span class="o">:</span> <span class="mi">33</span><span class="p">,</span></div><div class='line' id='LC72'>	<span class="s1">&#39;pagedown&#39;</span>	<span class="o">:</span> <span class="mi">34</span><span class="p">,</span></div><div class='line' id='LC73'>	<span class="s1">&#39;tab&#39;</span>		<span class="o">:</span> <span class="mi">9</span><span class="p">,</span></div><div class='line' id='LC74'>	<span class="s1">&#39;escape&#39;</span>	<span class="o">:</span> <span class="mi">27</span></div><div class='line' id='LC75'><span class="p">};</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'><span class="cm">/**</span></div><div class='line' id='LC78'><span class="cm"> * to process the keyboard dom event</span></div><div class='line' id='LC79'><span class="cm">*/</span></div><div class='line' id='LC80'><span class="nx">THREEx</span><span class="p">.</span><span class="nx">KeyboardState</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_onKeyChange</span>	<span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span></div><div class='line' id='LC81'><span class="p">{</span></div><div class='line' id='LC82'>	<span class="c1">// log to debug</span></div><div class='line' id='LC83'>	<span class="c1">//console.log(&quot;onKeyChange&quot;, event, event.keyCode, event.shiftKey, event.ctrlKey, event.altKey, event.metaKey)</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>	<span class="c1">// update this.keyCodes</span></div><div class='line' id='LC86'>	<span class="kd">var</span> <span class="nx">keyCode</span>		<span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span></div><div class='line' id='LC87'>	<span class="kd">var</span> <span class="nx">pressed</span>		<span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;keydown&#39;</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC88'>	<span class="k">this</span><span class="p">.</span><span class="nx">keyCodes</span><span class="p">[</span><span class="nx">keyCode</span><span class="p">]</span>	<span class="o">=</span> <span class="nx">pressed</span></div><div class='line' id='LC89'>	<span class="c1">// update this.modifiers</span></div><div class='line' id='LC90'>	<span class="k">this</span><span class="p">.</span><span class="nx">modifiers</span><span class="p">[</span><span class="s1">&#39;shift&#39;</span><span class="p">]</span>	<span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">shiftKey</span></div><div class='line' id='LC91'>	<span class="k">this</span><span class="p">.</span><span class="nx">modifiers</span><span class="p">[</span><span class="s1">&#39;ctrl&#39;</span><span class="p">]</span>	<span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">ctrlKey</span></div><div class='line' id='LC92'>	<span class="k">this</span><span class="p">.</span><span class="nx">modifiers</span><span class="p">[</span><span class="s1">&#39;alt&#39;</span><span class="p">]</span>	<span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">altKey</span></div><div class='line' id='LC93'>	<span class="k">this</span><span class="p">.</span><span class="nx">modifiers</span><span class="p">[</span><span class="s1">&#39;meta&#39;</span><span class="p">]</span>	<span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">metaKey</span></div><div class='line' id='LC94'><span class="p">}</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'><span class="cm">/**</span></div><div class='line' id='LC97'><span class="cm"> * query keyboard state to know if a key is pressed of not</span></div><div class='line' id='LC98'><span class="cm"> *</span></div><div class='line' id='LC99'><span class="cm"> * @param {String} keyDesc the description of the key. format : modifiers+key e.g shift+A</span></div><div class='line' id='LC100'><span class="cm"> * @returns {Boolean} true if the key is pressed, false otherwise</span></div><div class='line' id='LC101'><span class="cm">*/</span></div><div class='line' id='LC102'><span class="nx">THREEx</span><span class="p">.</span><span class="nx">KeyboardState</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">pressed</span>	<span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">keyDesc</span><span class="p">){</span></div><div class='line' id='LC103'>	<span class="kd">var</span> <span class="nx">keys</span>	<span class="o">=</span> <span class="nx">keyDesc</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;+&quot;</span><span class="p">);</span></div><div class='line' id='LC104'>	<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC105'>		<span class="kd">var</span> <span class="nx">key</span>		<span class="o">=</span> <span class="nx">keys</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span></div><div class='line' id='LC106'>		<span class="kd">var</span> <span class="nx">pressed</span>	<span class="o">=</span> <span class="kc">false</span></div><div class='line' id='LC107'>		<span class="k">if</span><span class="p">(</span> <span class="nx">THREEx</span><span class="p">.</span><span class="nx">KeyboardState</span><span class="p">.</span><span class="nx">MODIFIERS</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span> <span class="nx">key</span> <span class="p">)</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span> <span class="p">){</span></div><div class='line' id='LC108'>			<span class="nx">pressed</span>	<span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">modifiers</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC109'>		<span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">THREEx</span><span class="p">.</span><span class="nx">KeyboardState</span><span class="p">.</span><span class="nx">ALIAS</span><span class="p">).</span><span class="nx">indexOf</span><span class="p">(</span> <span class="nx">key</span> <span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span> <span class="p">){</span></div><div class='line' id='LC110'>			<span class="nx">pressed</span>	<span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">keyCodes</span><span class="p">[</span> <span class="nx">THREEx</span><span class="p">.</span><span class="nx">KeyboardState</span><span class="p">.</span><span class="nx">ALIAS</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="p">];</span></div><div class='line' id='LC111'>		<span class="p">}</span><span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC112'>			<span class="nx">pressed</span>	<span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">keyCodes</span><span class="p">[</span><span class="nx">key</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">().</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)]</span></div><div class='line' id='LC113'>		<span class="p">}</span></div><div class='line' id='LC114'>		<span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="nx">pressed</span><span class="p">)</span>	<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC115'>	<span class="p">};</span></div><div class='line' id='LC116'>	<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC117'><span class="p">}</span></div><div class='line' id='LC118'><br/></div><div class='line' id='LC119'><span class="cm">/**</span></div><div class='line' id='LC120'><span class="cm"> * return true if an event match a keyDesc</span></div><div class='line' id='LC121'><span class="cm"> * @param  {KeyboardEvent} event   keyboard event</span></div><div class='line' id='LC122'><span class="cm"> * @param  {String} keyDesc string description of the key</span></div><div class='line' id='LC123'><span class="cm"> * @return {Boolean}         true if the event match keyDesc, false otherwise</span></div><div class='line' id='LC124'><span class="cm"> */</span></div><div class='line' id='LC125'><span class="nx">THREEx</span><span class="p">.</span><span class="nx">KeyboardState</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">eventMatches</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">keyDesc</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC126'>	<span class="kd">var</span> <span class="nx">aliases</span>	<span class="o">=</span> <span class="nx">THREEx</span><span class="p">.</span><span class="nx">KeyboardState</span><span class="p">.</span><span class="nx">ALIAS</span></div><div class='line' id='LC127'>	<span class="kd">var</span> <span class="nx">aliasKeys</span>	<span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">aliases</span><span class="p">)</span></div><div class='line' id='LC128'>	<span class="kd">var</span> <span class="nx">keys</span>	<span class="o">=</span> <span class="nx">keyDesc</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;+&quot;</span><span class="p">)</span></div><div class='line' id='LC129'>	<span class="c1">// log to debug</span></div><div class='line' id='LC130'>	<span class="c1">// console.log(&quot;eventMatches&quot;, event, event.keyCode, event.shiftKey, event.ctrlKey, event.altKey, event.metaKey)</span></div><div class='line' id='LC131'>	<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC132'>		<span class="kd">var</span> <span class="nx">key</span>		<span class="o">=</span> <span class="nx">keys</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC133'>		<span class="kd">var</span> <span class="nx">pressed</span>	<span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC134'>		<span class="k">if</span><span class="p">(</span> <span class="nx">key</span> <span class="o">===</span> <span class="s1">&#39;shift&#39;</span> <span class="p">){</span></div><div class='line' id='LC135'>			<span class="nx">pressed</span>	<span class="o">=</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">shiftKey</span>	<span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span><span class="p">)</span></div><div class='line' id='LC136'>		<span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span> <span class="nx">key</span> <span class="o">===</span> <span class="s1">&#39;ctrl&#39;</span> <span class="p">){</span></div><div class='line' id='LC137'>			<span class="nx">pressed</span>	<span class="o">=</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">ctrlKey</span>	<span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span><span class="p">)</span></div><div class='line' id='LC138'>		<span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span> <span class="nx">key</span> <span class="o">===</span> <span class="s1">&#39;alt&#39;</span> <span class="p">){</span></div><div class='line' id='LC139'>			<span class="nx">pressed</span>	<span class="o">=</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">altKey</span>		<span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span><span class="p">)</span></div><div class='line' id='LC140'>		<span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span> <span class="nx">key</span> <span class="o">===</span> <span class="s1">&#39;meta&#39;</span> <span class="p">){</span></div><div class='line' id='LC141'>			<span class="nx">pressed</span>	<span class="o">=</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">metaKey</span>	<span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span><span class="p">)</span></div><div class='line' id='LC142'>		<span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span> <span class="nx">aliasKeys</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span> <span class="nx">key</span> <span class="p">)</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span> <span class="p">){</span></div><div class='line' id='LC143'>			<span class="nx">pressed</span>	<span class="o">=</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">===</span> <span class="nx">aliases</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC144'>		<span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">===</span> <span class="nx">key</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">().</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="p">){</span></div><div class='line' id='LC145'>			<span class="nx">pressed</span>	<span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC146'>		<span class="p">}</span></div><div class='line' id='LC147'>		<span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="nx">pressed</span> <span class="p">)</span>	<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC148'>	<span class="p">}</span></div><div class='line' id='LC149'>	<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC150'><span class="p">}</span></div><div class='line' id='LC151'><br/></div><div class='line' id='LC152'><br/></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.02798s from github-fe129-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-31cf39cf6a61d4c498cba6c0e9c100fb2b06b2f8.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-3ce38bb3847507f17846ba0a46d52f1b39114512.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

