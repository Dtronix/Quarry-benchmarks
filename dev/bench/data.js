window.BENCHMARK_DATA = {
  "lastUpdate": 1775969144606,
  "repoUrl": "https://github.com/Dtronix/Quarry",
  "entries": {
    "Quarry Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "djgosnell",
            "username": "DJGosnell",
            "email": "djgosnell@gmail.com"
          },
          "committer": {
            "name": "djgosnell",
            "username": "DJGosnell",
            "email": "djgosnell@gmail.com"
          },
          "id": "3b765e5585196d8d4af3cb86f701f9c2ba507516",
          "message": "Polish benchmark reports and remove dry run option\n\nReporter changes:\n- Sort benchmark rows by Mean ascending (fastest first) within each\n  class instead of alphabetically\n- Add a top nav bar matching the dashboard (Home/Dashboard/Run\n  History/Source) so the per-commit reports are navigable\n- Make the commit SHA in the header a clickable link to the matching\n  GitHub commit\n- Scope sidebar styles to .sidebar so the new top nav doesn't\n  inherit them\n\nWorkflow and infrastructure:\n- Drop the dry_run workflow_dispatch input and BENCHMARK_DRY_RUN\n  env var; remove the gating from the publish step\n- Remove dry-run job selection from BenchmarkConfig\n- Fix runs.html Home link to use ../../../ (was ../../, which only\n  reached /dev/ instead of the repo root)",
          "timestamp": "2026-04-11T15:38:05Z",
          "url": "https://github.com/Dtronix/Quarry/commit/3b765e5585196d8d4af3cb86f701f9c2ba507516"
        },
        "date": 1775924962692,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18546.28989821214,
            "unit": "ns",
            "range": "± 118.25149088502997"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8276.639177594867,
            "unit": "ns",
            "range": "± 57.27014484607036"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18473.80676487514,
            "unit": "ns",
            "range": "± 168.7382276922038"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 195559.7894984654,
            "unit": "ns",
            "range": "± 1568.1358742371074"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 34009.86876569475,
            "unit": "ns",
            "range": "± 274.9383812816781"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 53318.24231426533,
            "unit": "ns",
            "range": "± 241.54652348137347"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 88151.61391977164,
            "unit": "ns",
            "range": "± 377.9378315274606"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 109576.02556903545,
            "unit": "ns",
            "range": "± 547.4457122538404"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 111028.9945765904,
            "unit": "ns",
            "range": "± 799.2123119269837"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 110827.30487932477,
            "unit": "ns",
            "range": "± 822.3426563075254"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 43977.92307692308,
            "unit": "ns",
            "range": "± 389.21426437085216"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 47980.083333333336,
            "unit": "ns",
            "range": "± 522.0425719897727"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 187886.4664776142,
            "unit": "ns",
            "range": "± 427.9275099188519"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16216.911909836988,
            "unit": "ns",
            "range": "± 98.28407703189292"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17046.883723667688,
            "unit": "ns",
            "range": "± 225.45349917040232"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 83784.2855834961,
            "unit": "ns",
            "range": "± 595.3510020321716"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 122975.17924528301,
            "unit": "ns",
            "range": "± 5097.9523105382705"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 52971.88461538462,
            "unit": "ns",
            "range": "± 804.3916478164869"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 144025.3743426983,
            "unit": "ns",
            "range": "± 664.0934987724426"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 399708.2780761719,
            "unit": "ns",
            "range": "± 2597.5399456620326"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 36275.89191545759,
            "unit": "ns",
            "range": "± 412.8994199676704"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 36458.63138991136,
            "unit": "ns",
            "range": "± 354.76755343759424"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 205027.56824669472,
            "unit": "ns",
            "range": "± 1076.7970565636772"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 93356.42627970378,
            "unit": "ns",
            "range": "± 320.53125843245493"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 99436.18534633091,
            "unit": "ns",
            "range": "± 796.00639013155"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 124385.03002929688,
            "unit": "ns",
            "range": "± 441.84688683186477"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 81489.44782366071,
            "unit": "ns",
            "range": "± 530.5773360233854"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 35420.23123168945,
            "unit": "ns",
            "range": "± 239.16077746668876"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 103198.34933035714,
            "unit": "ns",
            "range": "± 779.656036790007"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 483377.9841308594,
            "unit": "ns",
            "range": "± 1860.7361891784362"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 342823.182547433,
            "unit": "ns",
            "range": "± 1803.0186318671472"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 420028.28049879806,
            "unit": "ns",
            "range": "± 1406.8187252209796"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 490330.28648158483,
            "unit": "ns",
            "range": "± 3461.502904916066"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 18973604.31473214,
            "unit": "ns",
            "range": "± 123661.99727669796"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 38133.833333333336,
            "unit": "ns",
            "range": "± 510.57362274448167"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 42444.75,
            "unit": "ns",
            "range": "± 450.8991757218754"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 363521.7635591947,
            "unit": "ns",
            "range": "± 1495.7210749871579"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 221715.76057316706,
            "unit": "ns",
            "range": "± 831.4070583742266"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 212793.0316859654,
            "unit": "ns",
            "range": "± 792.7199669855252"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 311446.8255333534,
            "unit": "ns",
            "range": "± 1580.6772204300166"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "djgosnell",
            "username": "DJGosnell",
            "email": "djgosnell@gmail.com"
          },
          "committer": {
            "name": "djgosnell",
            "username": "DJGosnell",
            "email": "djgosnell@gmail.com"
          },
          "id": "77030fa3d0102d4bcc359a1e91328c752a11ccc4",
          "message": "Add light/dark mode support to benchmark pages\n\nUse CSS variables with a prefers-color-scheme: dark override across\nlanding, dashboard, runs, and the per-commit report HTML so the\nbenchmark site matches the user's OS theme. Dashboard charts read the\nchart line, fill, and grid colors from CSS variables and listen for\ntheme changes so chart.js updates live when the OS theme flips.",
          "timestamp": "2026-04-11T20:18:47Z",
          "url": "https://github.com/Dtronix/Quarry/commit/77030fa3d0102d4bcc359a1e91328c752a11ccc4"
        },
        "date": 1775942773554,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18377.859344482422,
            "unit": "ns",
            "range": "± 72.62583217216468"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8240.63096501277,
            "unit": "ns",
            "range": "± 30.754891021876148"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18355.487119402205,
            "unit": "ns",
            "range": "± 185.28677367029258"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 193138.4463936942,
            "unit": "ns",
            "range": "± 1210.4621946771454"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 34261.27393450056,
            "unit": "ns",
            "range": "± 269.7845182941053"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 52849.59832763672,
            "unit": "ns",
            "range": "± 171.5300194873398"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 87397.8073448768,
            "unit": "ns",
            "range": "± 553.4031505400541"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 112619.45190429688,
            "unit": "ns",
            "range": "± 552.0480639080762"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 109391.4544114333,
            "unit": "ns",
            "range": "± 336.90261260972244"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 110365.46037946429,
            "unit": "ns",
            "range": "± 997.7092851222155"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 44579.5,
            "unit": "ns",
            "range": "± 407.30373596780737"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 47825.61538461538,
            "unit": "ns",
            "range": "± 470.4041770048282"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 195033.70718149038,
            "unit": "ns",
            "range": "± 794.0457238420759"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16895.70392717634,
            "unit": "ns",
            "range": "± 215.21346252118954"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17756.27357835036,
            "unit": "ns",
            "range": "± 130.56009015945318"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 87043.30085100446,
            "unit": "ns",
            "range": "± 740.7038544096353"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 123088.33333333333,
            "unit": "ns",
            "range": "± 1003.7005469156563"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 53455.46153846154,
            "unit": "ns",
            "range": "± 678.0832809452213"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 144873.87311662946,
            "unit": "ns",
            "range": "± 947.8125308916821"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 416787.6072823661,
            "unit": "ns",
            "range": "± 2665.6858292516404"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 35445.68808218149,
            "unit": "ns",
            "range": "± 177.27008753364817"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 36754.257864815845,
            "unit": "ns",
            "range": "± 375.08540896314673"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 204752.14610072545,
            "unit": "ns",
            "range": "± 1638.9283142876125"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 93659.89725435697,
            "unit": "ns",
            "range": "± 592.1509760670674"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 95179.26070731027,
            "unit": "ns",
            "range": "± 839.9076924349267"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 124350.87267127403,
            "unit": "ns",
            "range": "± 926.8504697455809"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 77819.30988420759,
            "unit": "ns",
            "range": "± 725.2347740112431"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 35284.56943453275,
            "unit": "ns",
            "range": "± 200.8720200761936"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 104575.90497698102,
            "unit": "ns",
            "range": "± 783.7597494734637"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 484068.0810546875,
            "unit": "ns",
            "range": "± 1850.6773381795847"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 336026.80821010045,
            "unit": "ns",
            "range": "± 2325.594629401866"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 422951.0196126302,
            "unit": "ns",
            "range": "± 856.2978675017742"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 490861.81682477676,
            "unit": "ns",
            "range": "± 3588.66838749335"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 18869387.234375,
            "unit": "ns",
            "range": "± 141166.40165029228"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 39305.21428571428,
            "unit": "ns",
            "range": "± 653.8387449483278"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 43494.846153846156,
            "unit": "ns",
            "range": "± 614.908102368943"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 372774.5569545201,
            "unit": "ns",
            "range": "± 2012.4184819864513"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 229140.39088657923,
            "unit": "ns",
            "range": "± 1941.7329240564827"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 210389.79869666466,
            "unit": "ns",
            "range": "± 919.8016869405122"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 316312.12677873886,
            "unit": "ns",
            "range": "± 2121.0776228117948"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "DJGosnell",
            "username": "DJGosnell",
            "email": "DJGosnell@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8a42a8457328dea005369a43d2a0b10731dffa60",
          "message": "Fix generator bugs, improve build perf, and consolidate code (#254)\n\n* Fix SubqueryExpr parameter extraction and collection traversal\n\n- ExtractSubqueryParameters now processes sub.Selector in addition to\n  sub.Predicate, fixing aggregate subqueries with captured variables\n  (e.g., u.Orders.Sum(o => o.Total * discount))\n- Preserve ImplicitJoins via WithImplicitJoins() on SubqueryExpr\n  reconstruction, fixing HasManyThrough navigations in subquery predicates\n- Remove early-return when Predicate is null so selectors with captured\n  values are still extracted\n- Add RawCallExpr case to CollectParamsRecursive so Sql.Raw<T>()\n  arguments are included in parameter collection\n- Add sub.Selector recursion to CollectParamsRecursive for SubqueryExpr\n\n* Fix equality gaps in AssembledPlan and QueryParameter\n\nAssembledPlan.Equals now includes 8 previously missing immutable\nproperties: IsTraced, BatchInsertReturningSuffix, BatchInsertColumnsPerRow,\nExecutionSite, ClauseSites, PreparedTerminals, PrepareSite, InsertInfo.\nThese all affect generated code and were causing the incremental pipeline\nto serve stale cached output when only these properties changed.\n\nQueryParameter.Equals now includes 4 previously missing immutable\nproperties: EntityPropertyExpression, NeedsUnsafeAccessor,\nIsDirectAccessible, CollectionAccessExpression. These control parameter\naccess code generation paths.\n\n* Cache GetClauseEntries() result on AssembledPlan\n\nAdd lazy-initialized backing field so GetClauseEntries() builds the\nclause entry list once and returns the cached result on subsequent calls.\nEliminates ~6+N redundant list allocations per chain during emission\n(called from FileEmitter, CarrierEmitter, and TerminalEmitHelpers).\n\n* Pre-compute site params and conditional map on AssembledPlan\n\nMove ResolveSiteParams logic into a cached dictionary on AssembledPlan,\neliminating O(N^2) per-site iteration during emission. Move\nBuildParamConditionalMap similarly. Both are now computed once on first\naccess and returned from cache on subsequent calls.\n\nResolveSiteParams and BuildParamConditionalMap in TerminalEmitHelpers\nnow delegate to the cached methods. The diagnostic clause offset\ncomputation also reuses the cached map.\n\n* Include all equality-significant fields in SqlExpr node hashes\n\nParamSlotExpr: add ExpressionPath, ElementTypeName, CustomTypeMappingClass,\nIsEnum, EnumUnderlyingType to hash (were in DeepEquals but not hash).\nSwitch to HashCode builder pattern for >8 fields.\n\nCapturedValueExpr: add ClrType and IsStaticField to hash.\n\nLikeExpr: add LikePrefix, LikeSuffix, NeedsEscape to hash.\nSwitch to HashCode builder pattern.\n\nReduces spurious hash collisions that force expensive DeepEquals calls\nduring incremental build caching.\n\n* Unify terminal eligibility checks between FileEmitter and CarrierEmitter\n\nFileEmitter now delegates to CarrierEmitter.WouldExecutionTerminalBeEmitted()\nfor execution terminal eligibility instead of maintaining parallel inline\nchecks. This eliminates the risk of the two paths diverging when new\nterminal kinds are added or eligibility logic changes.\n\nThe per-kind TRACE comments are simplified to a single message since\nthe detailed diagnostics were development aids.\n\n* Extract shared patterns: projection param remapping and SQL literal formatter\n\nChainAnalyzer: extract RemapProjectionParameters() helper replacing two\nidentical 30-line blocks in AnalyzeChainGroup and AnalyzeOperandChain.\n\nSQL literal formatting: consolidate FormatConstantAsSqlLiteralSimple\n(UsageSiteDiscovery) and FormatConstantForSql (ProjectionAnalyzer) into\na shared SqlLikeHelpers.FormatConstantAsSqlLiteral method with the\nsuperset of type coverage. EscapeSqlString also moved to shared location.\nEach caller retains its own fallback behavior for unsupported types.\n\nUpdate FormatConstantTests to reference the new shared method location.\n\n* Small improvements: StringBuilder reuse, catch specificity, ternary marker\n\nSqlExprRenderer: add RenderTo(StringBuilder) overload so callers with\nan existing StringBuilder can avoid intermediate string allocations.\nExisting Render() delegates to it.\n\nSqlExprAnnotator: change three bare catch blocks to catch (Exception)\nto avoid swallowing fatal CLR exceptions (OutOfMemoryException, etc.).\nGraceful degradation behavior is preserved for normal exceptions.\n\nSqlExprParser: replace raw C# ternary syntax in SqlRawExpr with a clear\ncomment marker. The ternary expression was being emitted as raw C# text\nwhich is always invalid SQL.\n\n* Add tests for SubqueryExpr parameter extraction and collection\n\nAdd 6 tests covering the C1/C2/C5 bug fixes:\n- CollectParameters recurses into SubqueryExpr.Selector\n- CollectParameters recurses into both Predicate and Selector\n- CollectParameters recurses into RawCallExpr.Arguments\n- ExtractParameters parameterizes CapturedValueExpr in Selector\n- ExtractParameters handles both Predicate and Selector params\n- ExtractParameters preserves ImplicitJoins on resolved SubqueryExpr\n\n* Update workflow.md with PR number\n\n* chore: remove session artifacts before merge",
          "timestamp": "2026-04-12T03:54:46Z",
          "url": "https://github.com/Dtronix/Quarry/commit/8a42a8457328dea005369a43d2a0b10731dffa60"
        },
        "date": 1775969144241,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18430.13631984166,
            "unit": "ns",
            "range": "± 114.21938442971353"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8121.230662754604,
            "unit": "ns",
            "range": "± 61.246723068431194"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18636.10010939378,
            "unit": "ns",
            "range": "± 195.50317890919692"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 204236.99823869977,
            "unit": "ns",
            "range": "± 1136.1973062232794"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 34720.55680025541,
            "unit": "ns",
            "range": "± 372.2825230320783"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 53270.29652622768,
            "unit": "ns",
            "range": "± 480.68172268937195"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 88852.19200032552,
            "unit": "ns",
            "range": "± 1364.0041185722832"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 110909.61717006138,
            "unit": "ns",
            "range": "± 753.5245247888647"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 107452.5229304387,
            "unit": "ns",
            "range": "± 555.7952963251944"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 109582.45127516527,
            "unit": "ns",
            "range": "± 530.5205612617762"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 43868.92307692308,
            "unit": "ns",
            "range": "± 477.92476073444544"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 47498.230769230766,
            "unit": "ns",
            "range": "± 667.0078902389579"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 192068.74487304688,
            "unit": "ns",
            "range": "± 1546.7774512496521"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16059.268820626396,
            "unit": "ns",
            "range": "± 141.6708901390048"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17829.576455923227,
            "unit": "ns",
            "range": "± 102.62488310417346"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 84198.53503417969,
            "unit": "ns",
            "range": "± 729.2205605005062"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 125312.35820895522,
            "unit": "ns",
            "range": "± 5891.815136018349"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 53846.07692307692,
            "unit": "ns",
            "range": "± 659.2484940620471"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 140764.61513264975,
            "unit": "ns",
            "range": "± 276.90515749567476"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 401077.70685686386,
            "unit": "ns",
            "range": "± 3332.447898384481"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 35804.29274204799,
            "unit": "ns",
            "range": "± 518.6284053903864"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 36663.02092197963,
            "unit": "ns",
            "range": "± 384.0509731039926"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 207263.9966008113,
            "unit": "ns",
            "range": "± 1233.743382978451"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 93973.28327287946,
            "unit": "ns",
            "range": "± 864.2656846471115"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 94862.49764578683,
            "unit": "ns",
            "range": "± 697.7502431462439"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 127062.32305438702,
            "unit": "ns",
            "range": "± 1048.6392882750317"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 82337.27980259487,
            "unit": "ns",
            "range": "± 480.2906619647514"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 35352.39362880162,
            "unit": "ns",
            "range": "± 293.0077460005778"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 103441.38658728966,
            "unit": "ns",
            "range": "± 374.4036280342396"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 483720.86568777903,
            "unit": "ns",
            "range": "± 2044.3060113102752"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 324932.9901216947,
            "unit": "ns",
            "range": "± 1433.2006594021877"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 423178.3008161272,
            "unit": "ns",
            "range": "± 2790.0021215306633"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 492157.8068498884,
            "unit": "ns",
            "range": "± 4702.169516800272"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 18506570.588541668,
            "unit": "ns",
            "range": "± 59867.93690974016"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 38339.75,
            "unit": "ns",
            "range": "± 565.2703496397261"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 43688.90909090909,
            "unit": "ns",
            "range": "± 1030.7581541246095"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 372310.8194405692,
            "unit": "ns",
            "range": "± 2592.2589624069674"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 232435.26374162946,
            "unit": "ns",
            "range": "± 1366.232153086673"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 215140.70079627403,
            "unit": "ns",
            "range": "± 1139.801685014801"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 314353.35518973216,
            "unit": "ns",
            "range": "± 1915.81348889042"
          }
        ]
      }
    ]
  }
}