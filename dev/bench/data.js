window.BENCHMARK_DATA = {
  "lastUpdate": 1776821348168,
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
            "range": "± 118.25149088502997",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8276.639177594867,
            "unit": "ns",
            "range": "± 57.27014484607036",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18473.80676487514,
            "unit": "ns",
            "range": "± 168.7382276922038",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 195559.7894984654,
            "unit": "ns",
            "range": "± 1568.1358742371074",
            "allocated": 27443
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 34009.86876569475,
            "unit": "ns",
            "range": "± 274.9383812816781",
            "allocated": 2857
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 53318.24231426533,
            "unit": "ns",
            "range": "± 241.54652348137347",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 88151.61391977164,
            "unit": "ns",
            "range": "± 377.9378315274606",
            "allocated": 8602
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 109576.02556903545,
            "unit": "ns",
            "range": "± 547.4457122538404",
            "allocated": 9042
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 111028.9945765904,
            "unit": "ns",
            "range": "± 799.2123119269837",
            "allocated": 8909
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 110827.30487932477,
            "unit": "ns",
            "range": "± 822.3426563075254",
            "allocated": 8919
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 43977.92307692308,
            "unit": "ns",
            "range": "± 389.21426437085216",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 47980.083333333336,
            "unit": "ns",
            "range": "± 522.0425719897727",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 187886.4664776142,
            "unit": "ns",
            "range": "± 427.9275099188519",
            "allocated": 27382
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16216.911909836988,
            "unit": "ns",
            "range": "± 98.28407703189292",
            "allocated": 1331
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17046.883723667688,
            "unit": "ns",
            "range": "± 225.45349917040232",
            "allocated": 1628
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 83784.2855834961,
            "unit": "ns",
            "range": "± 595.3510020321716",
            "allocated": 9298
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 122975.17924528301,
            "unit": "ns",
            "range": "± 5097.9523105382705",
            "allocated": 15647
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 52971.88461538462,
            "unit": "ns",
            "range": "± 804.3916478164869",
            "allocated": 1587
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 144025.3743426983,
            "unit": "ns",
            "range": "± 664.0934987724426",
            "allocated": 14756
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 399708.2780761719,
            "unit": "ns",
            "range": "± 2597.5399456620326",
            "allocated": 47708
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 36275.89191545759,
            "unit": "ns",
            "range": "± 412.8994199676704",
            "allocated": 4260
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 36458.63138991136,
            "unit": "ns",
            "range": "± 354.76755343759424",
            "allocated": 4270
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 205027.56824669472,
            "unit": "ns",
            "range": "± 1076.7970565636772",
            "allocated": 29440
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 93356.42627970378,
            "unit": "ns",
            "range": "± 320.53125843245493",
            "allocated": 10691
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 99436.18534633091,
            "unit": "ns",
            "range": "± 796.00639013155",
            "allocated": 9400
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 124385.03002929688,
            "unit": "ns",
            "range": "± 441.84688683186477",
            "allocated": 9339
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 81489.44782366071,
            "unit": "ns",
            "range": "± 530.5773360233854",
            "allocated": 10117
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 35420.23123168945,
            "unit": "ns",
            "range": "± 239.16077746668876",
            "allocated": 2376
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 103198.34933035714,
            "unit": "ns",
            "range": "± 779.656036790007",
            "allocated": 10650
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 483377.9841308594,
            "unit": "ns",
            "range": "± 1860.7361891784362",
            "allocated": 1413
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 342823.182547433,
            "unit": "ns",
            "range": "± 1803.0186318671472",
            "allocated": 10762
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 420028.28049879806,
            "unit": "ns",
            "range": "± 1406.8187252209796",
            "allocated": 8919
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 490330.28648158483,
            "unit": "ns",
            "range": "± 3461.502904916066",
            "allocated": 1413
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 18973604.31473214,
            "unit": "ns",
            "range": "± 123661.99727669796",
            "allocated": 1918894
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 38133.833333333336,
            "unit": "ns",
            "range": "± 510.57362274448167",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 42444.75,
            "unit": "ns",
            "range": "± 450.8991757218754",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 363521.7635591947,
            "unit": "ns",
            "range": "± 1495.7210749871579",
            "allocated": 16302
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 221715.76057316706,
            "unit": "ns",
            "range": "± 831.4070583742266",
            "allocated": 6728
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 212793.0316859654,
            "unit": "ns",
            "range": "± 792.7199669855252",
            "allocated": 6738
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 311446.8255333534,
            "unit": "ns",
            "range": "± 1580.6772204300166",
            "allocated": 16333
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
            "range": "± 72.62583217216468",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8240.63096501277,
            "unit": "ns",
            "range": "± 30.754891021876148",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18355.487119402205,
            "unit": "ns",
            "range": "± 185.28677367029258",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 193138.4463936942,
            "unit": "ns",
            "range": "± 1210.4621946771454",
            "allocated": 27443
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 34261.27393450056,
            "unit": "ns",
            "range": "± 269.7845182941053",
            "allocated": 2857
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 52849.59832763672,
            "unit": "ns",
            "range": "± 171.5300194873398",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 87397.8073448768,
            "unit": "ns",
            "range": "± 553.4031505400541",
            "allocated": 8602
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 112619.45190429688,
            "unit": "ns",
            "range": "± 552.0480639080762",
            "allocated": 9042
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 109391.4544114333,
            "unit": "ns",
            "range": "± 336.90261260972244",
            "allocated": 8909
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 110365.46037946429,
            "unit": "ns",
            "range": "± 997.7092851222155",
            "allocated": 8919
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 44579.5,
            "unit": "ns",
            "range": "± 407.30373596780737",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 47825.61538461538,
            "unit": "ns",
            "range": "± 470.4041770048282",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 195033.70718149038,
            "unit": "ns",
            "range": "± 794.0457238420759",
            "allocated": 27382
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16895.70392717634,
            "unit": "ns",
            "range": "± 215.21346252118954",
            "allocated": 1331
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17756.27357835036,
            "unit": "ns",
            "range": "± 130.56009015945318",
            "allocated": 1628
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 87043.30085100446,
            "unit": "ns",
            "range": "± 740.7038544096353",
            "allocated": 9298
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 123088.33333333333,
            "unit": "ns",
            "range": "± 1003.7005469156563",
            "allocated": 15647
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 53455.46153846154,
            "unit": "ns",
            "range": "± 678.0832809452213",
            "allocated": 1587
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 144873.87311662946,
            "unit": "ns",
            "range": "± 947.8125308916821",
            "allocated": 14756
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 416787.6072823661,
            "unit": "ns",
            "range": "± 2665.6858292516404",
            "allocated": 47708
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 35445.68808218149,
            "unit": "ns",
            "range": "± 177.27008753364817",
            "allocated": 4260
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 36754.257864815845,
            "unit": "ns",
            "range": "± 375.08540896314673",
            "allocated": 4270
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 204752.14610072545,
            "unit": "ns",
            "range": "± 1638.9283142876125",
            "allocated": 29440
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 93659.89725435697,
            "unit": "ns",
            "range": "± 592.1509760670674",
            "allocated": 10691
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 95179.26070731027,
            "unit": "ns",
            "range": "± 839.9076924349267",
            "allocated": 9400
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 124350.87267127403,
            "unit": "ns",
            "range": "± 926.8504697455809",
            "allocated": 9339
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 77819.30988420759,
            "unit": "ns",
            "range": "± 725.2347740112431",
            "allocated": 10117
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 35284.56943453275,
            "unit": "ns",
            "range": "± 200.8720200761936",
            "allocated": 2376
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 104575.90497698102,
            "unit": "ns",
            "range": "± 783.7597494734637",
            "allocated": 10650
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 484068.0810546875,
            "unit": "ns",
            "range": "± 1850.6773381795847",
            "allocated": 1413
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 336026.80821010045,
            "unit": "ns",
            "range": "± 2325.594629401866",
            "allocated": 10762
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 422951.0196126302,
            "unit": "ns",
            "range": "± 856.2978675017742",
            "allocated": 8919
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 490861.81682477676,
            "unit": "ns",
            "range": "± 3588.66838749335",
            "allocated": 1413
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 18869387.234375,
            "unit": "ns",
            "range": "± 141166.40165029228",
            "allocated": 1918894
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 39305.21428571428,
            "unit": "ns",
            "range": "± 653.8387449483278",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 43494.846153846156,
            "unit": "ns",
            "range": "± 614.908102368943",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 372774.5569545201,
            "unit": "ns",
            "range": "± 2012.4184819864513",
            "allocated": 16302
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 229140.39088657923,
            "unit": "ns",
            "range": "± 1941.7329240564827",
            "allocated": 6728
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 210389.79869666466,
            "unit": "ns",
            "range": "± 919.8016869405122",
            "allocated": 6738
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 316312.12677873886,
            "unit": "ns",
            "range": "± 2121.0776228117948",
            "allocated": 16333
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
            "range": "± 114.21938442971353",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8121.230662754604,
            "unit": "ns",
            "range": "± 61.246723068431194",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18636.10010939378,
            "unit": "ns",
            "range": "± 195.50317890919692",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 204236.99823869977,
            "unit": "ns",
            "range": "± 1136.1973062232794",
            "allocated": 27443
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 34720.55680025541,
            "unit": "ns",
            "range": "± 372.2825230320783",
            "allocated": 2857
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 53270.29652622768,
            "unit": "ns",
            "range": "± 480.68172268937195",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 88852.19200032552,
            "unit": "ns",
            "range": "± 1364.0041185722832",
            "allocated": 8602
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 110909.61717006138,
            "unit": "ns",
            "range": "± 753.5245247888647",
            "allocated": 9042
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 107452.5229304387,
            "unit": "ns",
            "range": "± 555.7952963251944",
            "allocated": 8909
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 109582.45127516527,
            "unit": "ns",
            "range": "± 530.5205612617762",
            "allocated": 8919
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 43868.92307692308,
            "unit": "ns",
            "range": "± 477.92476073444544",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 47498.230769230766,
            "unit": "ns",
            "range": "± 667.0078902389579",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 192068.74487304688,
            "unit": "ns",
            "range": "± 1546.7774512496521",
            "allocated": 27382
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16059.268820626396,
            "unit": "ns",
            "range": "± 141.6708901390048",
            "allocated": 1331
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17829.576455923227,
            "unit": "ns",
            "range": "± 102.62488310417346",
            "allocated": 1628
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 84198.53503417969,
            "unit": "ns",
            "range": "± 729.2205605005062",
            "allocated": 9298
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 125312.35820895522,
            "unit": "ns",
            "range": "± 5891.815136018349",
            "allocated": 15647
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 53846.07692307692,
            "unit": "ns",
            "range": "± 659.2484940620471",
            "allocated": 1587
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 140764.61513264975,
            "unit": "ns",
            "range": "± 276.90515749567476",
            "allocated": 14756
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 401077.70685686386,
            "unit": "ns",
            "range": "± 3332.447898384481",
            "allocated": 47708
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 35804.29274204799,
            "unit": "ns",
            "range": "± 518.6284053903864",
            "allocated": 4260
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 36663.02092197963,
            "unit": "ns",
            "range": "± 384.0509731039926",
            "allocated": 4270
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 207263.9966008113,
            "unit": "ns",
            "range": "± 1233.743382978451",
            "allocated": 29440
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 93973.28327287946,
            "unit": "ns",
            "range": "± 864.2656846471115",
            "allocated": 10691
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 94862.49764578683,
            "unit": "ns",
            "range": "± 697.7502431462439",
            "allocated": 9400
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 127062.32305438702,
            "unit": "ns",
            "range": "± 1048.6392882750317",
            "allocated": 9339
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 82337.27980259487,
            "unit": "ns",
            "range": "± 480.2906619647514",
            "allocated": 10117
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 35352.39362880162,
            "unit": "ns",
            "range": "± 293.0077460005778",
            "allocated": 2376
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 103441.38658728966,
            "unit": "ns",
            "range": "± 374.4036280342396",
            "allocated": 10650
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 483720.86568777903,
            "unit": "ns",
            "range": "± 2044.3060113102752",
            "allocated": 1413
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 324932.9901216947,
            "unit": "ns",
            "range": "± 1433.2006594021877",
            "allocated": 10762
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 423178.3008161272,
            "unit": "ns",
            "range": "± 2790.0021215306633",
            "allocated": 8919
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 492157.8068498884,
            "unit": "ns",
            "range": "± 4702.169516800272",
            "allocated": 1413
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 18506570.588541668,
            "unit": "ns",
            "range": "± 59867.93690974016",
            "allocated": 1918894
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 38339.75,
            "unit": "ns",
            "range": "± 565.2703496397261",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 43688.90909090909,
            "unit": "ns",
            "range": "± 1030.7581541246095",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 372310.8194405692,
            "unit": "ns",
            "range": "± 2592.2589624069674",
            "allocated": 16302
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 232435.26374162946,
            "unit": "ns",
            "range": "± 1366.232153086673",
            "allocated": 6728
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 215140.70079627403,
            "unit": "ns",
            "range": "± 1139.801685014801",
            "allocated": 6738
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 314353.35518973216,
            "unit": "ns",
            "range": "± 1915.81348889042",
            "allocated": 16333
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "DJGosnell",
            "username": "DJGosnell",
            "email": "djgosnell@gmail.com"
          },
          "committer": {
            "name": "DJGosnell",
            "username": "DJGosnell",
            "email": "djgosnell@gmail.com"
          },
          "id": "444c72b388b57e76a278b3e1b0fac884ae8b8adb",
          "message": "Mark raw-SQL fallback benchmarks and align report columns\n\nSuffix EF Core and SqlKata benchmark methods with `_RawFallback` where the\ncomparison library has no equivalent builder workflow for the scenario Quarry\nmodels natively (window functions, CTEs, scalar correlated subqueries) and is\nforced to drop down to hand-written SQL. This makes it explicit in the report\nthat those rows are not strictly apples-to-apples against Quarry's full\nchain-interceptor path. Document the convention in the benchmarks article.\n\nAlso fix vertical column alignment across per-class tables in the HTML report\nby switching to `table-layout: fixed` with a shared `<colgroup>` template, and\nadd hover tooltips for method names that get ellipsis-truncated.",
          "timestamp": "2026-04-12T14:25:31Z",
          "url": "https://github.com/Dtronix/Quarry/commit/444c72b388b57e76a278b3e1b0fac884ae8b8adb"
        },
        "date": 1776007024016,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18183.718043736048,
            "unit": "ns",
            "range": "± 150.9989370273286",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8248.89344552847,
            "unit": "ns",
            "range": "± 60.994683328823854",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 17639.075298602766,
            "unit": "ns",
            "range": "± 137.74619363071122",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 190666.25178410456,
            "unit": "ns",
            "range": "± 950.6845831708489",
            "allocated": 27443
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 33893.25262451172,
            "unit": "ns",
            "range": "± 324.7202390742951",
            "allocated": 2857
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 52881.01834810697,
            "unit": "ns",
            "range": "± 279.3599342110983",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 87776.1147273137,
            "unit": "ns",
            "range": "± 520.7796644597202",
            "allocated": 8602
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 109046.03093610491,
            "unit": "ns",
            "range": "± 594.98979021513",
            "allocated": 9042
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 108917.55201939175,
            "unit": "ns",
            "range": "± 559.9561765931876",
            "allocated": 8909
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 111168.33769880023,
            "unit": "ns",
            "range": "± 782.560164776201",
            "allocated": 8919
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 43967.75,
            "unit": "ns",
            "range": "± 457.00012432860854",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 47584.307692307695,
            "unit": "ns",
            "range": "± 340.6741807591198",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 190576.05575796275,
            "unit": "ns",
            "range": "± 823.4455450319738",
            "allocated": 27382
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16257.493273053851,
            "unit": "ns",
            "range": "± 202.41181117598575",
            "allocated": 1331
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17463.728066580636,
            "unit": "ns",
            "range": "± 219.75323895895394",
            "allocated": 1628
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 83904.33687046597,
            "unit": "ns",
            "range": "± 767.9049229489177",
            "allocated": 9298
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 121560,
            "unit": "ns",
            "range": "± 942.2112289715083",
            "allocated": 15647
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 52545.96153846154,
            "unit": "ns",
            "range": "± 706.2731548280518",
            "allocated": 1587
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 145544.05341045672,
            "unit": "ns",
            "range": "± 709.9185782396144",
            "allocated": 14756
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 410067.91033063614,
            "unit": "ns",
            "range": "± 2447.3969195783047",
            "allocated": 47708
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 35704.15829233023,
            "unit": "ns",
            "range": "± 257.9279192516624",
            "allocated": 4260
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 36990.855752127514,
            "unit": "ns",
            "range": "± 333.73296814477266",
            "allocated": 4270
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 205659.5043334961,
            "unit": "ns",
            "range": "± 416.06869903908097",
            "allocated": 29440
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 93670.53916579027,
            "unit": "ns",
            "range": "± 531.8375531223209",
            "allocated": 10691
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 98014.40636335101,
            "unit": "ns",
            "range": "± 579.18724279533",
            "allocated": 9400
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 126766.62831333706,
            "unit": "ns",
            "range": "± 867.0580981678777",
            "allocated": 9339
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 83662.6261945452,
            "unit": "ns",
            "range": "± 457.41882001398346",
            "allocated": 10117
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 35208.94154240535,
            "unit": "ns",
            "range": "± 152.0231792621679",
            "allocated": 2376
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 101941.4398803711,
            "unit": "ns",
            "range": "± 416.30827708253287",
            "allocated": 10650
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 487835.1046316964,
            "unit": "ns",
            "range": "± 4390.5310755799155",
            "allocated": 1413
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 336928.5696498326,
            "unit": "ns",
            "range": "± 2166.868868553418",
            "allocated": 10762
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 422527.67735877406,
            "unit": "ns",
            "range": "± 1765.7455239219441",
            "allocated": 8919
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 496774.6796875,
            "unit": "ns",
            "range": "± 4579.192533735014",
            "allocated": 1413
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 18827521.83705357,
            "unit": "ns",
            "range": "± 93548.3139582246",
            "allocated": 1918894
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 38281.03846153846,
            "unit": "ns",
            "range": "± 638.3183134070096",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 42230.769230769234,
            "unit": "ns",
            "range": "± 651.0039879353216",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 374069.7677283654,
            "unit": "ns",
            "range": "± 1678.9160768697982",
            "allocated": 16302
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 227480.0588566707,
            "unit": "ns",
            "range": "± 617.3297263494777",
            "allocated": 6728
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 209283.0035869892,
            "unit": "ns",
            "range": "± 1500.6619313665058",
            "allocated": 6738
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 303732.99774639425,
            "unit": "ns",
            "range": "± 1211.5378598993125",
            "allocated": 16333
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "DJGosnell",
            "username": "DJGosnell",
            "email": "djgosnell@gmail.com"
          },
          "committer": {
            "name": "DJGosnell",
            "username": "DJGosnell",
            "email": "djgosnell@gmail.com"
          },
          "id": "f7db32420c8eb90b4209af606eb410c181633443",
          "message": "Add std-dev band, per-chart unit selection, and larger cards to dashboard\n\nSurface BenchmarkDotNet's StandardError on each data point as a translucent\nband around the mean line, so noise vs. real regressions reads at a glance.\nThe band is built from two extra Chart.js datasets (lower/upper bounds with\nfill: '-1') drawn underneath the mean line, with a new --chart-band CSS\nvariable for light/dark theme parity.\n\nEach chart now picks its own time unit (ns / us / ms / s) from the median of\nits own series, so the y-axis no longer shows raw nanosecond values like\n\"187000\". The picked unit is shown under the chart heading with its\nrelationship to a second in scientific notation, and the tooltip displays\nboth the mean and the +/- sigma in the same unit with adaptive precision.\n\nOther tweaks supporting the change:\n- Doubled card size (840x440) so the larger graphs have room to breathe\n- Linear segment interpolation (tension: 0) instead of bezier smoothing\n- Adaptive marker visibility — circles hidden past 100 points, with a wider\n  pointHitRadius so hover still works on dense series\n- spanGaps + parsing: false on band datasets to keep render fast at the\n  500-point cap configured in benchmark.yml\n- Click handler scoped to the mean dataset so clicking inside the band area\n  still navigates to the correct report\n- Theme-change handler rebuilds datasets from cached ns values so band/line\n  colors track the theme without losing precision",
          "timestamp": "2026-04-12T14:54:49Z",
          "url": "https://github.com/Dtronix/Quarry/commit/f7db32420c8eb90b4209af606eb410c181633443"
        },
        "date": 1776010004855,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18114.993896484375,
            "unit": "ns",
            "range": "± 162.21636438280697",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8235.571763174874,
            "unit": "ns",
            "range": "± 75.582018076663",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18466.20073054387,
            "unit": "ns",
            "range": "± 96.52851227353855",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 189276.10655799278,
            "unit": "ns",
            "range": "± 1369.4829314614428",
            "allocated": 27443
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 33691.45553823618,
            "unit": "ns",
            "range": "± 246.70798156116885",
            "allocated": 2857
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 52667.12309382512,
            "unit": "ns",
            "range": "± 300.6682355100143",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 88218.2076509916,
            "unit": "ns",
            "range": "± 221.0817039936196",
            "allocated": 8602
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 112032.66783796038,
            "unit": "ns",
            "range": "± 739.7021665771217",
            "allocated": 9042
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 111354.63337590144,
            "unit": "ns",
            "range": "± 346.8242234430709",
            "allocated": 8909
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 113982.22781808036,
            "unit": "ns",
            "range": "± 453.9576720762214",
            "allocated": 8919
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 44915.944444444445,
            "unit": "ns",
            "range": "± 951.174473524688",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 48510.71428571428,
            "unit": "ns",
            "range": "± 534.90853690808",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 195082.2114780971,
            "unit": "ns",
            "range": "± 1000.3845010766669",
            "allocated": 27382
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16321.709418160575,
            "unit": "ns",
            "range": "± 140.76087495893591",
            "allocated": 1331
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17822.799562894383,
            "unit": "ns",
            "range": "± 137.4101553663908",
            "allocated": 1628
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 84791.23502291166,
            "unit": "ns",
            "range": "± 435.0222082443318",
            "allocated": 9298
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 120829.47368421052,
            "unit": "ns",
            "range": "± 952.0492732592418",
            "allocated": 15647
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 53212.41176470588,
            "unit": "ns",
            "range": "± 1080.4913846731686",
            "allocated": 1587
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 141649.75732421875,
            "unit": "ns",
            "range": "± 920.9991114432862",
            "allocated": 14756
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 405907.54619891825,
            "unit": "ns",
            "range": "± 1572.6100001820835",
            "allocated": 47708
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 35850.4869525616,
            "unit": "ns",
            "range": "± 250.4509648633954",
            "allocated": 4260
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 36487.39547964243,
            "unit": "ns",
            "range": "± 208.47895491811013",
            "allocated": 4270
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 199412.96274038462,
            "unit": "ns",
            "range": "± 752.1814695809414",
            "allocated": 29440
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 91640.06892277644,
            "unit": "ns",
            "range": "± 464.34992670861686",
            "allocated": 10691
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 94139.52422626202,
            "unit": "ns",
            "range": "± 510.11348050748296",
            "allocated": 9400
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 125583.69114176433,
            "unit": "ns",
            "range": "± 616.4726564922743",
            "allocated": 9339
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 77858.33095296223,
            "unit": "ns",
            "range": "± 259.4104561801326",
            "allocated": 10117
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 35558.7703944615,
            "unit": "ns",
            "range": "± 363.04671910362663",
            "allocated": 2376
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 102930.58014385517,
            "unit": "ns",
            "range": "± 467.53874173596404",
            "allocated": 10650
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 484078.19461495534,
            "unit": "ns",
            "range": "± 2446.7614724707673",
            "allocated": 1413
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 330441.5017089844,
            "unit": "ns",
            "range": "± 2124.0924029800835",
            "allocated": 10762
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 420391.11760066106,
            "unit": "ns",
            "range": "± 1608.7061747623222",
            "allocated": 8919
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 488783.0223214286,
            "unit": "ns",
            "range": "± 2887.4354773817536",
            "allocated": 1413
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 19210414.926339287,
            "unit": "ns",
            "range": "± 125213.22380059643",
            "allocated": 1918894
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 39565.42857142857,
            "unit": "ns",
            "range": "± 616.1221737342627",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 51570.21276595745,
            "unit": "ns",
            "range": "± 10997.920534260093",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 368962.46415201825,
            "unit": "ns",
            "range": "± 993.5988434250395",
            "allocated": 16302
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 230500.00247896634,
            "unit": "ns",
            "range": "± 1043.1083272557044",
            "allocated": 6728
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 215294.11622971756,
            "unit": "ns",
            "range": "± 1055.64921497447",
            "allocated": 6738
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 351605.90883091517,
            "unit": "ns",
            "range": "± 2172.1434495627395",
            "allocated": 16333
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
          "id": "9a458dfc857154c16ede20a3748fbaf08b5a5fc3",
          "message": "Collapse carrier list path to one state machine and drop SequentialAccess (#255)",
          "timestamp": "2026-04-16T22:58:35Z",
          "url": "https://github.com/Dtronix/Quarry/commit/9a458dfc857154c16ede20a3748fbaf08b5a5fc3"
        },
        "date": 1776383400128,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18705.79141017369,
            "unit": "ns",
            "range": "± 187.5120921458954",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8379.621507917132,
            "unit": "ns",
            "range": "± 62.212576074339864",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18719.732768467493,
            "unit": "ns",
            "range": "± 122.05461454731",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 202237.91154597356,
            "unit": "ns",
            "range": "± 1110.703528334133",
            "allocated": 27156
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 32329.33049598107,
            "unit": "ns",
            "range": "± 210.54029572022188",
            "allocated": 2570
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 52434.21597994291,
            "unit": "ns",
            "range": "± 248.3360522962098",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 86365.46337890625,
            "unit": "ns",
            "range": "± 992.8259129831451",
            "allocated": 8315
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 109266.31848144531,
            "unit": "ns",
            "range": "± 487.88727620976044",
            "allocated": 8755
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 103401.58048189603,
            "unit": "ns",
            "range": "± 533.9646076556783",
            "allocated": 8622
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 109685.32737379808,
            "unit": "ns",
            "range": "± 504.35468396545014",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 44024.769230769234,
            "unit": "ns",
            "range": "± 673.5976981658704",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 51861.242105263154,
            "unit": "ns",
            "range": "± 6915.856116471786",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 189705.29575892858,
            "unit": "ns",
            "range": "± 1447.2490784283493",
            "allocated": 27095
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16786.61957223075,
            "unit": "ns",
            "range": "± 126.01172815117798",
            "allocated": 1331
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17816.88647896903,
            "unit": "ns",
            "range": "± 111.14211759980479",
            "allocated": 1659
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 82368.29799979074,
            "unit": "ns",
            "range": "± 700.4411692735911",
            "allocated": 9011
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 120715.40909090909,
            "unit": "ns",
            "range": "± 1041.6251454928226",
            "allocated": 15636
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 52736.25,
            "unit": "ns",
            "range": "± 712.142238728906",
            "allocated": 1587
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 135867.8110163762,
            "unit": "ns",
            "range": "± 611.4478174716118",
            "allocated": 14459
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 383497.4903041295,
            "unit": "ns",
            "range": "± 1471.7993831953736",
            "allocated": 47421
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 34907.33500889369,
            "unit": "ns",
            "range": "± 318.04776599587177",
            "allocated": 3973
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 35292.677378336586,
            "unit": "ns",
            "range": "± 135.1427941235675",
            "allocated": 3983
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 197524.2850811298,
            "unit": "ns",
            "range": "± 673.2005269396446",
            "allocated": 29153
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 88209.68519810268,
            "unit": "ns",
            "range": "± 820.3237655135633",
            "allocated": 10404
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 89862.1782836914,
            "unit": "ns",
            "range": "± 677.4915548858073",
            "allocated": 9114
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 122667.76278921273,
            "unit": "ns",
            "range": "± 925.5930773379429",
            "allocated": 9052
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 76066.87536621094,
            "unit": "ns",
            "range": "± 410.8863750237292",
            "allocated": 9830
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 33906.43584187826,
            "unit": "ns",
            "range": "± 77.48642463007198",
            "allocated": 2089
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 101991.12084021934,
            "unit": "ns",
            "range": "± 298.1622787865417",
            "allocated": 10363
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 485090.2949916295,
            "unit": "ns",
            "range": "± 3383.8884081504234",
            "allocated": 1116
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 331480.4987095424,
            "unit": "ns",
            "range": "± 2606.002178949185",
            "allocated": 10476
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 414937.24951171875,
            "unit": "ns",
            "range": "± 1048.383698734365",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 488136.49846540176,
            "unit": "ns",
            "range": "± 2802.147429461286",
            "allocated": 1126
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 18786817.39732143,
            "unit": "ns",
            "range": "± 151180.58096475835",
            "allocated": 1918894
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 39265.1875,
            "unit": "ns",
            "range": "± 665.7233378063293",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 42401.38461538462,
            "unit": "ns",
            "range": "± 523.4859976576162",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 361498.3781389509,
            "unit": "ns",
            "range": "± 2874.562895988948",
            "allocated": 16015
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 212235.14892578125,
            "unit": "ns",
            "range": "± 1381.9378198410873",
            "allocated": 6441
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 194580.9236653646,
            "unit": "ns",
            "range": "± 618.5521441197969",
            "allocated": 6451
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 289968.3330426897,
            "unit": "ns",
            "range": "± 2146.8711716430075",
            "allocated": 16046
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "DJGosnell",
            "email": "djgosnell@gmail.com",
            "username": "DJGosnell"
          },
          "committer": {
            "name": "DJGosnell",
            "email": "djgosnell@gmail.com",
            "username": "DJGosnell"
          },
          "id": "fd917c658332ca1b30a5598ad1decfe75f20fa7e",
          "message": "Add README.md for Quarry-benchmarks repo and deploy it from CI\n\n- New scripts/benchmark-pages/README.md points visitors of the\n  benchmark data repo back to the main Quarry project, describes the\n  repo layout, and notes that the content is CI-generated\n- Publish step cps it to the benchmarks repo root alongside the other\n  front-end pages; git add -A keeps it out of the commit diff on runs\n  where its content hasn't changed",
          "timestamp": "2026-04-17T12:57:13Z",
          "url": "https://github.com/Dtronix/Quarry/commit/fd917c658332ca1b30a5598ad1decfe75f20fa7e"
        },
        "date": 1776433706631,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 19065.36628505162,
            "unit": "ns",
            "range": "± 178.08131751412157",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8342.548834664482,
            "unit": "ns",
            "range": "± 85.82268843947895",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18865.97570546468,
            "unit": "ns",
            "range": "± 65.0619568596147",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 206096.91983468193,
            "unit": "ns",
            "range": "± 1756.9940972033748",
            "allocated": 27152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 32303.92575777494,
            "unit": "ns",
            "range": "± 233.268676066382",
            "allocated": 2568
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 53804.50672912598,
            "unit": "ns",
            "range": "± 247.590589657649",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 86403.964650472,
            "unit": "ns",
            "range": "± 368.99083983162785",
            "allocated": 8312
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 106621.99040004185,
            "unit": "ns",
            "range": "± 429.8171117588793",
            "allocated": 8752
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 104001.82255671575,
            "unit": "ns",
            "range": "± 575.9448472766345",
            "allocated": 8624
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 106553.24267578125,
            "unit": "ns",
            "range": "± 1008.0690110808457",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 44132.153846153844,
            "unit": "ns",
            "range": "± 277.2886120254028",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 48125.92857142857,
            "unit": "ns",
            "range": "± 333.9862881307265",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 191797.85233248197,
            "unit": "ns",
            "range": "± 570.7682007750336",
            "allocated": 27096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16551.03392615685,
            "unit": "ns",
            "range": "± 75.91940267286279",
            "allocated": 1336
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17814.711770193917,
            "unit": "ns",
            "range": "± 139.71753589906166",
            "allocated": 1664
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 81618.87719726562,
            "unit": "ns",
            "range": "± 655.9095899571619",
            "allocated": 9008
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 121232.625,
            "unit": "ns",
            "range": "± 1061.3102515287412",
            "allocated": 15648
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 52282,
            "unit": "ns",
            "range": "± 468.88281148821284",
            "allocated": 1592
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 135607.4635479267,
            "unit": "ns",
            "range": "± 993.1420371246734",
            "allocated": 14464
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 378791.4338030134,
            "unit": "ns",
            "range": "± 2314.5725703541693",
            "allocated": 47424
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 35017.12653459822,
            "unit": "ns",
            "range": "± 274.6920311558787",
            "allocated": 3976
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 35134.50631948618,
            "unit": "ns",
            "range": "± 133.3428473765599",
            "allocated": 3984
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 199066.76815359932,
            "unit": "ns",
            "range": "± 1847.7493351056805",
            "allocated": 29152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 89955.6689077524,
            "unit": "ns",
            "range": "± 406.86074542072413",
            "allocated": 10400
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 90365.70468575614,
            "unit": "ns",
            "range": "± 476.3971303207967",
            "allocated": 9112
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 123262.79995492789,
            "unit": "ns",
            "range": "± 703.0093612965178",
            "allocated": 9048
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 73544.1254272461,
            "unit": "ns",
            "range": "± 572.4743933186151",
            "allocated": 9832
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 34404.27078951322,
            "unit": "ns",
            "range": "± 241.37453112075184",
            "allocated": 2088
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 102112.03224534255,
            "unit": "ns",
            "range": "± 357.72458754536564",
            "allocated": 10360
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 482945.94771902903,
            "unit": "ns",
            "range": "± 1437.3386073538707",
            "allocated": 1120
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 327381.63987379806,
            "unit": "ns",
            "range": "± 1233.080013848208",
            "allocated": 10472
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 413124.8975736178,
            "unit": "ns",
            "range": "± 1589.6555202857078",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 491056.00153459824,
            "unit": "ns",
            "range": "± 4094.7204654706243",
            "allocated": 1128
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 19126453.91517857,
            "unit": "ns",
            "range": "± 121575.92348087297",
            "allocated": 1923200
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 38944.230769230766,
            "unit": "ns",
            "range": "± 523.1048578513606",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 46232.17021276596,
            "unit": "ns",
            "range": "± 6058.074579032904",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 360318.5286458333,
            "unit": "ns",
            "range": "± 1201.87922210396",
            "allocated": 16016
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 212059.17401592547,
            "unit": "ns",
            "range": "± 762.1773716598959",
            "allocated": 6440
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 193575.0822941707,
            "unit": "ns",
            "range": "± 1204.0507752892731",
            "allocated": 6448
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 299370.8621544471,
            "unit": "ns",
            "range": "± 1454.8153198968387",
            "allocated": 16048
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "djgosnell",
            "email": "djgosnell@gmail.com",
            "username": "DJGosnell"
          },
          "committer": {
            "name": "djgosnell",
            "email": "djgosnell@gmail.com",
            "username": "DJGosnell"
          },
          "id": "f9a97e8e3984994668c876454dffd17deb0d58c0",
          "message": "Mark v0.3.0 as released (2026-04-21)",
          "timestamp": "2026-04-21T23:45:26Z",
          "url": "https://github.com/Dtronix/Quarry/commit/f9a97e8e3984994668c876454dffd17deb0d58c0"
        },
        "date": 1776818344767,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 19059.25162447416,
            "unit": "ns",
            "range": "± 114.95528754467809",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8003.947512113131,
            "unit": "ns",
            "range": "± 58.50492526380619",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18492.049959455217,
            "unit": "ns",
            "range": "± 202.95201990953433",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 184202.47190504806,
            "unit": "ns",
            "range": "± 1040.4423767015373",
            "allocated": 27152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 32372.789175851005,
            "unit": "ns",
            "range": "± 403.65872509239585",
            "allocated": 2568
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 54451.735595703125,
            "unit": "ns",
            "range": "± 464.3046084152752",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 87090.37489827473,
            "unit": "ns",
            "range": "± 403.2784280926747",
            "allocated": 8312
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 111772.37682166466,
            "unit": "ns",
            "range": "± 312.1719905132232",
            "allocated": 8752
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 101769.54779522236,
            "unit": "ns",
            "range": "± 436.28831115353535",
            "allocated": 8624
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 106166.19348144531,
            "unit": "ns",
            "range": "± 538.1586583825413",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 45712,
            "unit": "ns",
            "range": "± 332.6950555689098",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 49816.833333333336,
            "unit": "ns",
            "range": "± 739.1753185240641",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 192205.93615722656,
            "unit": "ns",
            "range": "± 897.1072562132058",
            "allocated": 27096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16005.603966346154,
            "unit": "ns",
            "range": "± 51.35375316253851",
            "allocated": 1336
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17537.879528339094,
            "unit": "ns",
            "range": "± 65.46125189987535",
            "allocated": 1664
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 80285.59377615793,
            "unit": "ns",
            "range": "± 674.2456127838404",
            "allocated": 9008
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 124869.14893617021,
            "unit": "ns",
            "range": "± 4634.753128732135",
            "allocated": 15648
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 55013.875,
            "unit": "ns",
            "range": "± 680.5120498565768",
            "allocated": 1592
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 138821.59581580528,
            "unit": "ns",
            "range": "± 613.6421224488896",
            "allocated": 14464
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 384326.6512276786,
            "unit": "ns",
            "range": "± 1531.9871692344802",
            "allocated": 47424
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 34602.39677546574,
            "unit": "ns",
            "range": "± 362.1708653058095",
            "allocated": 3976
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 35520.25330461775,
            "unit": "ns",
            "range": "± 323.7061015350056",
            "allocated": 3984
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 198326.1681315104,
            "unit": "ns",
            "range": "± 814.873841621335",
            "allocated": 29152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 89035.44060809795,
            "unit": "ns",
            "range": "± 357.782814901422",
            "allocated": 10400
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 90998.13334437778,
            "unit": "ns",
            "range": "± 523.3896467736681",
            "allocated": 9112
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 120783.60201322116,
            "unit": "ns",
            "range": "± 347.854564575427",
            "allocated": 9048
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 72761.00061907087,
            "unit": "ns",
            "range": "± 671.6950132404761",
            "allocated": 9832
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 34054.89493032602,
            "unit": "ns",
            "range": "± 260.6580074802959",
            "allocated": 2088
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 102274.89723557692,
            "unit": "ns",
            "range": "± 319.2783345505616",
            "allocated": 10360
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 485616.3368013822,
            "unit": "ns",
            "range": "± 2075.6308967824857",
            "allocated": 1120
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 336307.18589564733,
            "unit": "ns",
            "range": "± 3962.2060294973016",
            "allocated": 10472
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 411337.6749173678,
            "unit": "ns",
            "range": "± 1818.7139832157757",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 498370.5661969866,
            "unit": "ns",
            "range": "± 2104.8265857812507",
            "allocated": 1128
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 19221851.328125,
            "unit": "ns",
            "range": "± 163844.74454069586",
            "allocated": 1923210
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 38990.066666666666,
            "unit": "ns",
            "range": "± 691.1897058867482",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 42661.333333333336,
            "unit": "ns",
            "range": "± 371.59712625695084",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 357462.6311848958,
            "unit": "ns",
            "range": "± 815.280119200073",
            "allocated": 16016
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 213598.02798227163,
            "unit": "ns",
            "range": "± 756.1884960448763",
            "allocated": 6440
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 196382.5786481585,
            "unit": "ns",
            "range": "± 1660.924887878532",
            "allocated": 6448
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 293604.2901436942,
            "unit": "ns",
            "range": "± 2067.510344609475",
            "allocated": 16048
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "djgosnell",
            "email": "djgosnell@gmail.com",
            "username": "DJGosnell"
          },
          "committer": {
            "name": "djgosnell",
            "email": "djgosnell@gmail.com",
            "username": "DJGosnell"
          },
          "id": "9315347759af35118d6efc716787a7ffe22be0fb",
          "message": "Add docs-validation sample; correct Many<T> aggregate doc examples\n\nSamples/5_DocsValidation is a runnable .NET 10 + SQLite project that\nexecutes every query rewritten in the anonymous-types fix. All 9 queries\ncompile through the Quarry generator and return correct results.\n\nShaking out the sample caught a doc mismatch: Many<T>.Sum/Min/Max/Avg\ncompile-time subqueries are supported only in predicate positions\n(Where/Having/comparisons), not as columns in a Select tuple. Attempting\nthe Select form crashes the generator with unresolved element types.\n\n- querying.md / llm.md / Generator/README.md / release-notes-v0.3.0.md:\n  Many<T> aggregate examples moved out of Select and into Where, with an\n  explicit note that Select-projection support is deferred.\n- HasManyThrough Count() stays as a Select example — its result type is\n  knowable and that path works.",
          "timestamp": "2026-04-22T00:14:10Z",
          "url": "https://github.com/Dtronix/Quarry/commit/9315347759af35118d6efc716787a7ffe22be0fb"
        },
        "date": 1776821348149,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18079.72717519907,
            "unit": "ns",
            "range": "± 110.96450269084619",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8238.04323359898,
            "unit": "ns",
            "range": "± 106.32320040844567",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18069.507542201452,
            "unit": "ns",
            "range": "± 166.06277396244045",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 185317.71871512276,
            "unit": "ns",
            "range": "± 1490.2203925319106",
            "allocated": 27152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 32542.373705182756,
            "unit": "ns",
            "range": "± 401.3201199937027",
            "allocated": 2568
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 53492.665870079625,
            "unit": "ns",
            "range": "± 378.2941512855128",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 85706.12744140625,
            "unit": "ns",
            "range": "± 517.6550188831444",
            "allocated": 8312
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 107978.00205775669,
            "unit": "ns",
            "range": "± 797.9461483538971",
            "allocated": 8752
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 104176.01620718148,
            "unit": "ns",
            "range": "± 572.3617405782571",
            "allocated": 8624
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 105232.14999624398,
            "unit": "ns",
            "range": "± 453.502274568197",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 44123.11538461538,
            "unit": "ns",
            "range": "± 486.23563191480497",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 47808.166666666664,
            "unit": "ns",
            "range": "± 840.7560089982505",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 185950.4911358173,
            "unit": "ns",
            "range": "± 477.8147094555452",
            "allocated": 27096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 15990.990264892578,
            "unit": "ns",
            "range": "± 49.391209979709366",
            "allocated": 1336
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17182.301447941707,
            "unit": "ns",
            "range": "± 66.43783425775474",
            "allocated": 1664
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 82285.94622333233,
            "unit": "ns",
            "range": "± 309.1569054300846",
            "allocated": 9008
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 121136.03333333334,
            "unit": "ns",
            "range": "± 2055.820512825081",
            "allocated": 15648
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 52485.61538461538,
            "unit": "ns",
            "range": "± 514.5949116313949",
            "allocated": 1592
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 137628.7813251202,
            "unit": "ns",
            "range": "± 1026.053252558339",
            "allocated": 14464
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 379664.81385216344,
            "unit": "ns",
            "range": "± 951.0242975870839",
            "allocated": 47424
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 34108.754786900114,
            "unit": "ns",
            "range": "± 289.298052676499",
            "allocated": 3976
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 34806.441692645734,
            "unit": "ns",
            "range": "± 210.03621159450134",
            "allocated": 3984
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 195540.5185546875,
            "unit": "ns",
            "range": "± 545.1287075528827",
            "allocated": 29152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 88469.568359375,
            "unit": "ns",
            "range": "± 471.93309047355444",
            "allocated": 10400
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 90355.57429387019,
            "unit": "ns",
            "range": "± 385.3238418761315",
            "allocated": 9112
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 120597.18062046597,
            "unit": "ns",
            "range": "± 502.6146652866155",
            "allocated": 9048
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 73835.0297663762,
            "unit": "ns",
            "range": "± 301.31503406302505",
            "allocated": 9832
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 33618.09258094201,
            "unit": "ns",
            "range": "± 225.54444277183836",
            "allocated": 2088
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 98673.97164481027,
            "unit": "ns",
            "range": "± 577.2640313739547",
            "allocated": 10360
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 485307.27371651784,
            "unit": "ns",
            "range": "± 2554.3666430941703",
            "allocated": 1120
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 323577.42229352676,
            "unit": "ns",
            "range": "± 1778.2890057663526",
            "allocated": 10472
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 422086.6501277043,
            "unit": "ns",
            "range": "± 1774.694387050088",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 492899.42843191966,
            "unit": "ns",
            "range": "± 2780.762588865493",
            "allocated": 1128
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 18809329.954326924,
            "unit": "ns",
            "range": "± 115694.76743787441",
            "allocated": 1923200
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 38499.846153846156,
            "unit": "ns",
            "range": "± 608.2714369634999",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 43173.230769230766,
            "unit": "ns",
            "range": "± 547.7956057153303",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 360494.60186298075,
            "unit": "ns",
            "range": "± 2038.1570019328897",
            "allocated": 16016
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 216385.8590436663,
            "unit": "ns",
            "range": "± 1172.4887489166108",
            "allocated": 6440
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 200007.679234096,
            "unit": "ns",
            "range": "± 1581.9287452988212",
            "allocated": 6448
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 297129.3889160156,
            "unit": "ns",
            "range": "± 1868.4279669341843",
            "allocated": 16048
          }
        ]
      }
    ]
  }
}