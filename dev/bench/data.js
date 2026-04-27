window.BENCHMARK_DATA = {
  "lastUpdate": 1777271249364,
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
      },
      {
        "commit": {
          "author": {
            "name": "DJGosnell",
            "email": "DJGosnell@users.noreply.github.com",
            "username": "DJGosnell"
          },
          "committer": {
            "name": "GitHub",
            "email": "noreply@github.com",
            "username": "web-flow"
          },
          "id": "4daf62d0a1b7993338ba4ea25a8601155dbda74f",
          "message": "Fix MigrationRunner bind-parameter mismatch on Npgsql 10 (GH-258) (#261)",
          "timestamp": "2026-04-23T19:43:31Z",
          "url": "https://github.com/Dtronix/Quarry/commit/4daf62d0a1b7993338ba4ea25a8601155dbda74f"
        },
        "date": 1776976557318,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 19226.339529184195,
            "unit": "ns",
            "range": "± 163.29877089190433",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8288.248510507437,
            "unit": "ns",
            "range": "± 39.65844222411626",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 19014.507795061385,
            "unit": "ns",
            "range": "± 201.38278153390283",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 206094.1787283761,
            "unit": "ns",
            "range": "± 1779.6576138177934",
            "allocated": 27152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 32620.772986778848,
            "unit": "ns",
            "range": "± 220.75636897087742",
            "allocated": 2568
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 53254.41955566406,
            "unit": "ns",
            "range": "± 233.87506731017075",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 87010.14573317308,
            "unit": "ns",
            "range": "± 355.308284536486",
            "allocated": 8312
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 110527.52178083148,
            "unit": "ns",
            "range": "± 530.6666031519353",
            "allocated": 8752
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 101426.6714477539,
            "unit": "ns",
            "range": "± 850.6323134372828",
            "allocated": 8624
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 105713.45620492789,
            "unit": "ns",
            "range": "± 481.24424455416204",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 43842.07692307692,
            "unit": "ns",
            "range": "± 599.239999435182",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 47927.416666666664,
            "unit": "ns",
            "range": "± 545.3710093860764",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 191818.84610421318,
            "unit": "ns",
            "range": "± 1198.4398299171664",
            "allocated": 27096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16916.12006378174,
            "unit": "ns",
            "range": "± 56.461094249524045",
            "allocated": 1336
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 18180.94152178083,
            "unit": "ns",
            "range": "± 180.3789708818949",
            "allocated": 1664
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 81384.14076585036,
            "unit": "ns",
            "range": "± 442.417274934321",
            "allocated": 9008
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 121282,
            "unit": "ns",
            "range": "± 712.3734975418442",
            "allocated": 15648
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 53343.857142857145,
            "unit": "ns",
            "range": "± 507.7294262987623",
            "allocated": 1592
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 135960.72242954798,
            "unit": "ns",
            "range": "± 1466.5133651135934",
            "allocated": 14464
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 382376.80343191966,
            "unit": "ns",
            "range": "± 2193.5147348314326",
            "allocated": 47424
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 34984.07518122746,
            "unit": "ns",
            "range": "± 167.36224780051538",
            "allocated": 3976
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 35459.43333082933,
            "unit": "ns",
            "range": "± 259.6554403030541",
            "allocated": 3984
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 196623.2362530048,
            "unit": "ns",
            "range": "± 1051.1107282687603",
            "allocated": 29152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 89432.16078538161,
            "unit": "ns",
            "range": "± 478.6997031819596",
            "allocated": 10400
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 96188.94035993304,
            "unit": "ns",
            "range": "± 692.5445580400332",
            "allocated": 9112
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 118665.04836600168,
            "unit": "ns",
            "range": "± 494.4281000477176",
            "allocated": 9048
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 74433.25645094652,
            "unit": "ns",
            "range": "± 241.29985497037512",
            "allocated": 9832
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 34733.06694617638,
            "unit": "ns",
            "range": "± 207.71639440802093",
            "allocated": 2088
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 99231.85787259616,
            "unit": "ns",
            "range": "± 369.31400846068925",
            "allocated": 10360
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 483392.0888671875,
            "unit": "ns",
            "range": "± 2714.8465291088883",
            "allocated": 1120
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 329209.11844308034,
            "unit": "ns",
            "range": "± 2085.258224240354",
            "allocated": 10472
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 408086.0605093149,
            "unit": "ns",
            "range": "± 1399.2121417298165",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 487429.9228515625,
            "unit": "ns",
            "range": "± 1297.1571315687684",
            "allocated": 1128
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 20717237.93080357,
            "unit": "ns",
            "range": "± 285840.9612545267",
            "allocated": 1923210
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 39494.833333333336,
            "unit": "ns",
            "range": "± 560.8297154190117",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 43305.192307692305,
            "unit": "ns",
            "range": "± 491.77728438379245",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 370091.31208147324,
            "unit": "ns",
            "range": "± 2288.03727792512",
            "allocated": 16016
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 214424.90517953725,
            "unit": "ns",
            "range": "± 910.6977718367174",
            "allocated": 6440
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 195541.63657924108,
            "unit": "ns",
            "range": "± 1089.0547957176898",
            "allocated": 6448
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 301570.2028808594,
            "unit": "ns",
            "range": "± 4542.001741592252",
            "allocated": 16048
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "DJGosnell",
            "email": "DJGosnell@users.noreply.github.com",
            "username": "DJGosnell"
          },
          "committer": {
            "name": "GitHub",
            "email": "noreply@github.com",
            "username": "web-flow"
          },
          "id": "e4354a41badcb6f897a0e19e5b90287f95838eb0",
          "message": "Support Sql.Raw<T> in Select projections (#256) (#262)\n\n* Support Sql.Raw<T> in single-entity Select projections (#256)\n\nPreviously, Sql.Raw<T> used inside a Select tuple/DTO/object-init projection\nsilently rendered as an empty string literal in the generated SQL\n(e.g., SELECT \"OrderId\", \"\" FROM \"orders\") because ProjectionAnalyzer fell\nthrough to the generic fallback where columnName=\"\" and the raw C# source\nwas placed in SqlExpression then later stripped.\n\nAdd a Raw case to GetAggregateInfo that parses each template argument via\nSqlExprParser, walks the resulting SqlExpr tree with a projection-aware\nrenderer, and substitutes {0}/{1}/... template placeholders with canonical\n{ColumnName} identifier placeholders (dialect-resolved later), @__proj{N}\nparameter placeholders for captured runtime vars, and inline literals for\ncompile-time constants. Binary ops, unary ops, function calls, IS NULL, IN,\nand LIKE expressions render inline so args like u.Price * 2 are supported.\n\nThe generic T type argument on Sql.Raw<T> determines the column CLR type;\ntemplate/arg count mismatches fail via RawCallExpr.Validate().\n\nCovers tuple, DTO, object-initializer, and single-column projection forms\nfor single-entity Select (joined projections follow in a separate commit).\n\nTask #1 of 3 in #256 workflow.\n\n* Support Sql.Raw<T> in joined and single-column Select projections (#256)\n\nAdd a Raw case to GetJoinedAggregateInfo that resolves column references\nto canonical {alias}.{ColumnName} placeholders using the per-parameter\nlookup. The shared BuildSqlRawInfo helper and the SqlExpr tree walker from\nPhase 1 are reused via a column-resolver delegate — only the column\nresolution differs between single-entity and joined contexts.\n\nSingle-column projections (e.g., .Select(u => Sql.Raw<string>(...)))\nalready route through GetAggregateInfo via AnalyzeInvocation, so no\nadditional change is needed; joined single-column does the same via\nAnalyzeJoinedInvocation → ResolveJoinedAggregate → GetJoinedAggregateInfo.\n\nAdd sanity tests for joined-tuple and single-column forms; the existing\ncolumn-reference sanity test from Phase 1 covers single-entity tuple form.\n\nTask #2 of 3 in #256 workflow.\n\n* Cross-dialect test coverage for Sql.Raw<T> in Select projections (#256)\n\nAdd 6 tests to complement the sanity tests from Phases 1+2, covering the\nfull surface of the fix:\n\n- Multiple column references — Sql.Raw<string>(\"coalesce({0}, {1})\", ...)\n- Captured variable — verifies @__proj{N} local placeholders are remapped\n  to dialect-specific parameter placeholders (@p0 / $1 / ?)\n- Literal parameter — compile-time constant inlines as SQL literal\n- No placeholders — template with no {N} substitutions passes through\n- DTO initializer — new UserSummaryDto { ... = Sql.Raw<string>(...) }\n- Binary op arg — u.UserId * 10 exercises the IR-based arg tree walker\n\nAll 9 tests (3 from Phases 1+2 + 6 added here) assert SQL output across\nSQLite, PostgreSQL, MySQL, and SqlServer.\n\nTask #3 of 3 in #256 workflow.\n\n* Remediate review findings for Sql.Raw<T> Select projection (#256)\n\nAddress review findings from _sessions/256-fix-sql-raw-select-projection/review.md:\n\n- Fail-loud fallback (#3): AnalyzeProjectedExpression returns null for a\n  methodName==\"Raw\" whose GetAggregateInfo returned null, preventing the\n  generic type-info fallback from producing an empty-column ProjectedColumn\n  that would regress the original #256 bug. AnalyzeInvocation emits a\n  specific CreateFailed message for the single-column path.\n\n- Captured-var typing (#4, #8, #16): RenderRawArgToCanonical tries\n  ResolveScalarArgSql first for simple scalar args (identifiers, literals,\n  captured members). This consults the semantic model for authoritative CLR\n  types rather than the SqlExprParser default of \"object\", so a captured\n  DateTime landed in ParameterInfo as \"object\" becomes \"DateTime\".\n\n- Dialect-aware booleans (#5): FormatLiteralForProjection emits canonical\n  {@BOOLT}/{@BOOLF} placeholders rather than per-dialect bool text.\n  QuoteSqlExpression resolves the placeholder to TRUE/FALSE on PostgreSQL\n  and 1/0 elsewhere. Because projection analysis runs at a fixed discovery\n  dialect, emitting dialect-rendered text at analysis time would embed the\n  wrong value in the cached SqlExpression.\n\n- String-concat guard (#6): RenderRawArgNode's Add walker bails to null if\n  either operand is a string/char typed literal or captured; the projection\n  fails loudly rather than emitting \"a + b\" which is invalid on MySQL/SqlServer.\n  Users who want string concat should write it in the template text.\n\n- Validation refactor (#7): Replaced the throwaway RawCallExpr shell with a\n  dedicated IsRawTemplateValid helper. Transient shell is now isolated to\n  one helper with clear scope.\n\n- T=\"object\" guard (#21): TryExtractSqlRawTypeArg returns null rather than\n  \"object\" when T is unresolvable. BuildSqlRawInfo then fails the projection\n  loudly instead of letting ChainAnalyzer.TryResolveAggregateTypeFromSql\n  misinfer a CLR type from SUM/MIN/MAX substrings in the user's template.\n\n- Tests: Add Select_SqlRaw_BooleanLiteralArg_DialectAware (#5, #13) and\n  Select_SqlRaw_CapturedVariable_TypeInferredFromSemanticModel (#4, #12, #14).\n\nReview classifications + Action Taken recorded in\n_sessions/256-fix-sql-raw-select-projection/review.md §Classifications.\nAll 3253 tests pass (3242 baseline + 11 Sql.Raw projection tests).\n\n* Record PR #262 in workflow state (#256)\n\n* Back-step REMEDIATE → REVIEW for session 2 re-analysis (#256)\n\nUser declined to finalize PR #262 and requested a fresh full\nreview. Archived prior review.md to review-session1.md; workflow\nphase reset to REVIEW.\n\n* Make Sql.Raw projection walker fail loudly on unsupported args (#256)\n\nReview session 2 findings #4, #8.\n\nThe projection-arg walker used to emit `SqlRawExpr.SqlText` verbatim\nwhen it reached a node the parser could not translate. Since\n`SqlExprParser` falls through to `new SqlRawExpr(expression.ToString())`\nfor C# ternaries, unknown invocations, postfix unary (other than `!`),\narray-creation without initializer, element access, and interpolated\nstrings, any of those inside `Sql.Raw<T>(template, arg)` would leak the\nC# source text — e.g. `/* unsupported: C# ternary expression */` or\n`u.Foo(x)` — into the generated SQL. This reproduces the exact class of\nsilent-wrong-SQL bug this PR fixes. The walker now returns null for\n`SqlRawExpr`, forcing the caller to bail out.\n\nThe string-concat Add guard now also checks `ColumnRefExpr` operands\nvia a new `isStringColumn` delegate threaded alongside the existing\ncolumn resolver. Previously only direct string literals and captured\nstring locals were caught, so `Sql.Raw<string>(\"{0}\", u.FirstName + u.LastName)`\nwould still emit `(\"FirstName\" + \"LastName\")` — invalid on MySQL and\nSqlServer. The guard now bails on any string-typed operand: literal,\ncaptured, or column.\n\nBoth `RenderRawArgToCanonical` and `RenderRawArgToCanonicalJoined`\nreceive an `isStringColumn` delegate that closes over the column\nlookup for the current context; `IsStringColumnRef` and\n`IsJoinedStringColumnRef` implement the two contexts.\n\n* Propagate IsStaticField and ExpressionPath for Sql.Raw captured vars (#256)\n\nReview session 2 findings #2, #9, #17.\n\n`AddCapturedAsProjectionParameter` now mirrors the ParameterInfo\nconstruction in `SqlExprClauseTranslator.ExtractParametersCore`\n(SqlExprClauseTranslator.cs:88-92) so captured-variable metadata\npropagates consistently across the Where-path and Select-projection\npaths:\n\n- `ExpressionPath = captured.ExpressionPath` — needed by the parameter\n  binder to emit direct-path navigation code for deep captures like\n  `obj.Inner.Field`.\n- `IsStaticCapture = captured.IsStaticField` — controls whether\n  UnsafeAccessor uses StaticField kind (null target) vs Field kind\n  (func.Target).\n\nLatent today: the walker path is only reached for captured variables\nthat are NOT direct identifiers or parameter-prefixed member accesses\n(the fast-path in RenderRawArgToCanonical delegates those to\nResolveScalarArgSql). Remaining walker captures are rare (function-call\nargs, operator arms) and SqlExprParser never sets IsStaticField=true in\nthe current code. The fix aligns the projection path with the canonical\npattern so future parser changes or more complex Raw arg shapes don't\nsilently drop capture metadata.\n\n* Tighten bool-literal detection and operator-table fallback (#256)\n\nReview session 2 findings #6, #7.\n\n`FormatLiteralForProjection` previously treated `\"TRUE\"`, `\"true\"`, and\n`\"1\"` as truthy, but `SqlExprParser.ParseLiteral` only ever emits\n`\"TRUE\"` or `\"FALSE\"` for bool literals (SqlExprParser.cs:270-274). The\nextra checks were dead and added cognitive load — now only `\"TRUE\"`\nmaps to `{@BOOLT}`, everything else to `{@BOOLF}`.\n\n`GetRawBinaryOperator` used to return `\"?\"` for any unmapped\n`SqlBinaryOperator`, which is the MySQL parameter placeholder and\nwould parse into unrelated runtime behavior — the exact silent-\nwrong-SQL failure mode this PR fixes. It now throws\n`ArgumentOutOfRangeException`, so any future operator addition that\nforgets to update the table will fail the build rather than emit\ngarbage SQL.\n\n* Emit QRY029 for Sql.Raw template errors in Select projections (#256)\n\nReview session 2 finding #1.\n\nWhere-path `Sql.Raw` calls surface template errors (placeholder/\nargument count mismatch) as QRY029 compile-time errors via\n`PipelineOrchestrator.CollectTranslatedDiagnostics`, because the raw\nsite's `Expression` is a `RawCallExpr` that runs `Validate()`. Select-\nprojection `Sql.Raw` calls were silent — `ProjectionAnalyzer.\nBuildSqlRawInfo` validated via a transient `RawCallExpr` shell and, on\nfailure, discarded both the shell and the error, returning `(null, null)`.\nThe projection then failed analysis and the chain degraded to runtime\nbuild, leaving no user-visible diagnostic.\n\n`GetRawTemplateValidationError` now returns the `Validate()` message\n(the same string the Where path shows). `BuildSqlRawInfo` records the\nmessage via a thread-static accumulator modeled on `PipelineErrorBag`.\nPublic entry points in `ProjectionAnalyzer` drain the accumulator and\nattach the messages to the returned `ProjectionInfo` via a new init-\nonly `SqlRawValidationErrors` property. `PipelineOrchestrator` emits\nQRY029 per entry, scoped to the Select call's location.\n\nScope note: QRY029 is attached to the Select call location rather\nthan the individual `Sql.Raw` call site — less precise than the\nWhere path, but sufficient to locate the bad template in the lambda.\n\nAdded `ProjectionFailureReason.SqlRawValidationError` for future callers\nthat want to distinguish this degradation class; current pipeline\nreads from `SqlRawValidationErrors` directly.\n\n* Test remediation coverage for Sql.Raw Select projection (#256)\n\nReview session 2 findings #11, #12, #14.\n\nUsageSiteDiscoveryTests.cs (#11):\nThree new QRY029 tests for projection-path Sql.Raw:\n- Too many arguments\n- Too few arguments\n- Non-sequential placeholders ({0}, {2} skipping {1})\nAll assert QRY029 fires and the message matches the RawCallExpr.Validate\ntext, mirroring the existing Where-path tests.\n\nCrossDialectMiscTests.cs (#12, #14):\n- Select_SqlRaw_CapturedVariable_TypeInferredFromSemanticModel now also\n  asserts Name, Value, IsCollection, IsEnum, and executes the query at\n  runtime to verify the captured DateTime round-trips through the\n  parameter binder (shallow-test remediation).\n- Select_SqlRaw_Joined_MultipleArgs — joined projection with three\n  args from a literal, u.UserName, and o.Status. Exercises\n  ResolveJoinedColumnRefToPlaceholder for two distinct lambda params.\n- Select_SqlRaw_Joined_WithCapturedVariable — joined projection with a\n  captured int threshold in the Raw arg. Exercises\n  IsScalarArgCandidateJoined and the fast-path delegation in the\n  joined context.\n\nManifest regeneration reflects the three new cross-dialect queries.\n\n* Share binary-operator table between SqlExprRenderer and Sql.Raw walker (#256)\n\nReview session 2 finding #16 (scoped).\n\nThe Sql.Raw projection walker used to carry its own copy of the\nSqlBinaryOperator → text table (`GetRawBinaryOperator`). Any future\noperator addition would require updating both it and\n`SqlExprRenderer.GetSqlOperator`, and any dialect-specific fix in the\nrenderer (e.g., the string-concat TODO at SqlExprRenderer.cs:290)\nwould bypass the walker. `GetSqlOperator` is now `internal` and\ncalled directly from the walker.\n\nThe renderer's fallback was also tightened to throw\n`ArgumentOutOfRangeException` rather than emit `\"?\"` — matching the\nwalker's stricter contract and preventing an unmapped operator from\nsilently rendering as the MySQL parameter placeholder.\n\nFull consolidation of the remaining shape-level duplication\n(IN/LIKE/IS NULL/function-call/unary emission) is out of scope: those\nrender paths in SqlExprRenderer invoke dialect-sensitive recursion\nthat the canonical walker must not enter. Tracked as a follow-up in\nthe walker's docstring: to share the rest, SqlExprRenderer would need\na canonical-projection output mode with delegate hooks for column\nresolution, captured-value accumulation, and literal rendering.\n\n* Record Action Taken for session 2 review findings (#256)\n\nPopulates the review.md Classifications table with a concise description\nof how each A/B finding was addressed (or why D findings were left\nalone). Session 2 remediation complete — ready to finalize.\n\n* Save PR #262 body draft alongside session artifacts (#256)\n\n* Update workflow.md for session 2 REMEDIATE completion (#256)\n\n* chore: remove session artifacts before merge",
          "timestamp": "2026-04-23T20:33:13Z",
          "url": "https://github.com/Dtronix/Quarry/commit/e4354a41badcb6f897a0e19e5b90287f95838eb0"
        },
        "date": 1776979520234,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18049.290252685547,
            "unit": "ns",
            "range": "± 83.05090261773152",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8449.740473066058,
            "unit": "ns",
            "range": "± 96.74604228233693",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 19154.04149881999,
            "unit": "ns",
            "range": "± 87.22808266127744",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 190911.24952915736,
            "unit": "ns",
            "range": "± 1158.0008843474477",
            "allocated": 27152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 31860.60216815655,
            "unit": "ns",
            "range": "± 84.90278287438447",
            "allocated": 2568
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 53283.41885610727,
            "unit": "ns",
            "range": "± 102.58194702641548",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 85349.74772135417,
            "unit": "ns",
            "range": "± 305.26172766820196",
            "allocated": 8312
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 108589.0661969866,
            "unit": "ns",
            "range": "± 997.3016895026735",
            "allocated": 8752
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 106158.00479561942,
            "unit": "ns",
            "range": "± 1106.671046551058",
            "allocated": 8624
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 107415.87715970553,
            "unit": "ns",
            "range": "± 992.3159390782887",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 44021.75,
            "unit": "ns",
            "range": "± 652.5991565202249",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 47917.53846153846,
            "unit": "ns",
            "range": "± 527.148874510262",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 184499.52533830915,
            "unit": "ns",
            "range": "± 1417.7764891195159",
            "allocated": 27096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16211.32633972168,
            "unit": "ns",
            "range": "± 217.46632783164267",
            "allocated": 1336
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17473.600799560547,
            "unit": "ns",
            "range": "± 139.44677181609154",
            "allocated": 1664
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 85266.4303541917,
            "unit": "ns",
            "range": "± 507.7628544258048",
            "allocated": 9008
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 122217.34210526316,
            "unit": "ns",
            "range": "± 1081.7454138339933",
            "allocated": 15648
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 53636.583333333336,
            "unit": "ns",
            "range": "± 437.22211088007",
            "allocated": 1592
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 137342.51136997767,
            "unit": "ns",
            "range": "± 949.3201196557835",
            "allocated": 14464
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 382902.46944173175,
            "unit": "ns",
            "range": "± 895.0434077638411",
            "allocated": 47424
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 34367.78786057692,
            "unit": "ns",
            "range": "± 157.63975903992494",
            "allocated": 3976
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 35563.530836838945,
            "unit": "ns",
            "range": "± 171.90483306387333",
            "allocated": 3984
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 196570.4048549107,
            "unit": "ns",
            "range": "± 1925.186534213896",
            "allocated": 29152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 88551.2799166166,
            "unit": "ns",
            "range": "± 489.7100168473514",
            "allocated": 10400
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 92043.87454927884,
            "unit": "ns",
            "range": "± 586.1785980003593",
            "allocated": 9112
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 122542.31822791466,
            "unit": "ns",
            "range": "± 836.2336156096144",
            "allocated": 9048
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 75072.30331420898,
            "unit": "ns",
            "range": "± 161.0101771009981",
            "allocated": 9832
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 33795.960341233476,
            "unit": "ns",
            "range": "± 230.73677382662316",
            "allocated": 2088
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 101192.54539271763,
            "unit": "ns",
            "range": "± 765.1291026400855",
            "allocated": 10360
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 486914.39404296875,
            "unit": "ns",
            "range": "± 3921.145199684296",
            "allocated": 1120
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 324943.4395926339,
            "unit": "ns",
            "range": "± 1934.772710121162",
            "allocated": 10472
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 410475.5643028846,
            "unit": "ns",
            "range": "± 2072.923736773928",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 490044.21551983175,
            "unit": "ns",
            "range": "± 2068.806444875468",
            "allocated": 1128
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 19164653.78348214,
            "unit": "ns",
            "range": "± 133510.31433330057",
            "allocated": 1923210
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 39199.38461538462,
            "unit": "ns",
            "range": "± 379.7651771076302",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 43601.5,
            "unit": "ns",
            "range": "± 627.3494024284017",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 358088.0192173549,
            "unit": "ns",
            "range": "± 3112.867444952158",
            "allocated": 16016
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 215467.22316196986,
            "unit": "ns",
            "range": "± 1873.847275540811",
            "allocated": 6440
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 194719.52407602163,
            "unit": "ns",
            "range": "± 914.2239128124006",
            "allocated": 6448
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 292780.73084435094,
            "unit": "ns",
            "range": "± 2129.916191018988",
            "allocated": 16048
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "DJGosnell",
            "email": "DJGosnell@users.noreply.github.com",
            "username": "DJGosnell"
          },
          "committer": {
            "name": "GitHub",
            "email": "noreply@github.com",
            "username": "web-flow"
          },
          "id": "c6e421fcacd2b944d647a78639742aab6ae74f9a",
          "message": "Docs/DX: three friction points introducing Quarry (#259) (#260)\n\n* feat(generator): QRY043 diagnostic for un-materializable RawSqlAsync row types\n\nSurface the real reason RawSqlAsync<T> row types fail to compile when T is a\npositional record or has init-only properties. Previously authors saw cryptic\nCS7036/CS8852 errors against generated code; now they see QRY043 naming their\ntype and the specific shape violation.\n\nDetection runs in DisplayClassEnricher where the ITypeSymbol is already resolved\nvia the supplemental compilation. Emission is suppressed for affected sites so\nQRY043 is the only error reported.\n\n* feat(generator): support nested row-entity types in RawSqlAsync interceptors\n\nNested row types (row record declared inside an enclosing class) previously broke\nthe generator: it emitted `using <EnclosingType>;` which the compiler rejects\nwith CS0138. Fix tracks the nesting state on RawSqlTypeInfo and emits the\n`global::`-prefixed fully qualified type name in generated bodies for nested\ntypes so references resolve without a using directive. Namespace-level row\ntypes still use their short name + using (unchanged codegen).\n\n* feat(packaging): ship Quarry.targets auto-registering Quarry.Generated\n\nAdds build/Quarry.targets to the Quarry NuGet package. It appends\nQuarry.Generated to <InterceptorsNamespaces> so consumers no longer hit CS9137\nfor the Quarry-internal namespace they can't reasonably discover. Consumers\nstill add their own QuarryContext namespace — Phase 4's QRY044 analyzer\nsurfaces that gap at authoring time.\n\nAlso exposes InterceptorsNamespaces as a CompilerVisibleProperty so that\nanalyzer can read it from AnalyzerConfigOptions.\n\n* feat(analyzers): QRY044 warns when QuarryContext namespace is missing from InterceptorsNamespaces\n\nSurfaces the CS9137 project-setup gap at authoring time with the exact\n<InterceptorsNamespaces> line to paste into the .csproj. Warning severity:\nthe build would fail with CS9137 anyway, so this is an earlier signal, not a\nnew error. Context classes in the global namespace are ignored because\nQuarry.Generated (auto-registered by the shipped targets file) already\ncovers that path.\n\nDescriptive diagnostic only — no CodeFixProvider, since the fix target is\nthe .csproj rather than a source document and standard Roslyn code fixes\ncan't reliably modify project files.\n\n* docs: document row-entity shape requirements and interceptor opt-in behavior\n\nUpdates llm.md and Quarry.Generator/{README.md,llm.md} with:\n- Revised InterceptorsNamespaces guidance: Quarry.Generated is now\n  auto-registered by the shipped targets file, so the doc only prompts for\n  the consumer's context namespace.\n- New Row entity shape note under Raw SQL describing the parameterless ctor\n  + public get/set property requirements, with QRY043 and the chain-query\n  workaround for immutable shapes.\n- Nested row types are explicitly called out as supported.\n- QRY043 and QRY044 added to the diagnostic inventory tables.\n\n* fix(generator): remediate review findings for #259\n\nReview items addressed inline:\n- #3 (B, Correctness): `CheckRowEntityMaterializability` now also rejects\n  abstract classes and interfaces. CS0144 would otherwise fire against the\n  generated `new T()` with no indication of which row type was at fault.\n- #5 (B, Tests): adds a nested-row test driving the struct-reader fallback\n  by using an expression SELECT list, exercising `SanitizeForIdentifier`\n  and the FQN-in-`IRowReader<T>` path.\n- #6 (B, Tests): strengthens the namespace-level-row regression to assert\n  that `using TestApp.Rows;` IS emitted.\n- #7 (B, Tests): adds a QRY044 test where `build_property.InterceptorsNamespaces`\n  is entirely absent (null), confirming the diagnostic still fires.\n- Plus QRY043 tests for abstract and interface row types.\n\nTest totals: 3256 passing (+4 from Phase 5 green baseline).\n\n* chore: record PR #260 in workflow.md + add pr-body.md session artifact\n\n* docs: include abstract class and interface rejection in QRY043 docs\n\nThe REMEDIATE-phase extension of CheckRowEntityMaterializability added two\nadditional rejection cases (abstract classes and interfaces) that weren't\nreflected in llm.md, src/Quarry.Generator/README.md, or\nsrc/Quarry.Generator/llm.md. Brings the guide text and diagnostic inventory\ntables in line with the actual QRY043 behavior.\n\n* chore(session): record session 2 resume and populate review Action Taken\n\nResume bookkeeping only — no code changes. Closes the review classification\nloop by filling Action Taken for B items #3/#5/#6/#7 with references to\ncommit be224dd; adds session log entry covering the resume.\n\n* chore(session): back-step REMEDIATE -> REVIEW for re-analysis\n\n* fix: remediate second-round review findings (A/#4, B/#1/#7/#8/#9)\n\nAddresses review.md classifications from session 2:\n- A/#4 Correctness: extend HasQuarryContextAttributeSyntactic with an\n  AliasQualifiedNameSyntax branch so [global::QuarryContextAttribute]\n  and extern-alias attribute forms pass the syntactic pre-filter.\n- B/#1 Plan: drop RawSqlTypeInfo.FullyQualifiedResultTypeName — written\n  but never read; ResultTypeName already carries the final display form\n  (FQN for nested, short for not).\n- B/#7 Tests: add alias-qualified attribute QRY044 coverage.\n- B/#8 Tests: add struct-with-init-only-property QRY043 coverage.\n- B/#9 Tests: add mixed RawSqlScalarAsync<int> + failing RawSqlAsync<T>\n  test exercising the scalar branch in PipelineOrchestrator + FileEmitter.\n\n3259 tests pass (+3 new).\n\n* docs(pr): update PR body for second remediation round (A/#4, B/#1/#7/#8/#9)\n\n* chore(session): log rebase on origin/master (4daf62d)\n\n* chore(session): log second rebase on origin/master (e4354a4)\n\n* chore(session): log third rebase on origin/master (95c4bbb + d2a6b1e)\n\n* chore: remove session artifacts before merge",
          "timestamp": "2026-04-23T21:22:30Z",
          "url": "https://github.com/Dtronix/Quarry/commit/c6e421fcacd2b944d647a78639742aab6ae74f9a"
        },
        "date": 1776982501956,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18398.5425327846,
            "unit": "ns",
            "range": "± 217.71693045002917",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8096.942783355713,
            "unit": "ns",
            "range": "± 39.09880509583638",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18460.666573660714,
            "unit": "ns",
            "range": "± 175.70205828395444",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 187370.03871372767,
            "unit": "ns",
            "range": "± 2014.841978153074",
            "allocated": 27152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 32185.274169921875,
            "unit": "ns",
            "range": "± 225.860788538936",
            "allocated": 2568
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 53625.3693586077,
            "unit": "ns",
            "range": "± 518.8817696318209",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 88135.06757061298,
            "unit": "ns",
            "range": "± 869.1051182386129",
            "allocated": 8312
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 107128.33118614784,
            "unit": "ns",
            "range": "± 459.0531280204226",
            "allocated": 8752
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 103809.42409842355,
            "unit": "ns",
            "range": "± 976.9903212787495",
            "allocated": 8624
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 110855.94115271934,
            "unit": "ns",
            "range": "± 738.4716318589993",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 44320.53846153846,
            "unit": "ns",
            "range": "± 461.1750599256598",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 48721,
            "unit": "ns",
            "range": "± 452.2477197289114",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 186061.2093157087,
            "unit": "ns",
            "range": "± 1047.0271112636758",
            "allocated": 27096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16013.61115675706,
            "unit": "ns",
            "range": "± 96.77302352965634",
            "allocated": 1336
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17728.395254952567,
            "unit": "ns",
            "range": "± 160.1731500453938",
            "allocated": 1664
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 82089.14956229074,
            "unit": "ns",
            "range": "± 690.9000471420852",
            "allocated": 9008
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 120507.0625,
            "unit": "ns",
            "range": "± 867.6248013014227",
            "allocated": 15648
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 53262.07692307692,
            "unit": "ns",
            "range": "± 624.7429420087462",
            "allocated": 1592
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 141685.28973858172,
            "unit": "ns",
            "range": "± 1033.3531187161132",
            "allocated": 14464
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 383000.6164738582,
            "unit": "ns",
            "range": "± 1803.9459429585809",
            "allocated": 47424
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 34669.22400774275,
            "unit": "ns",
            "range": "± 322.81101451635993",
            "allocated": 3976
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 35260.68688964844,
            "unit": "ns",
            "range": "± 190.1879455683687",
            "allocated": 3984
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 199356.73630934494,
            "unit": "ns",
            "range": "± 748.47952483853",
            "allocated": 29152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 89475.65473429362,
            "unit": "ns",
            "range": "± 346.72946876703406",
            "allocated": 10400
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 89843.57037823017,
            "unit": "ns",
            "range": "± 677.7749605593856",
            "allocated": 9112
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 122448.9448765346,
            "unit": "ns",
            "range": "± 836.7956038412799",
            "allocated": 9048
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 75932.5917881557,
            "unit": "ns",
            "range": "± 628.9505813039043",
            "allocated": 9832
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 33514.05467341496,
            "unit": "ns",
            "range": "± 182.23706810169722",
            "allocated": 2088
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 100580.03020770733,
            "unit": "ns",
            "range": "± 476.2905728630928",
            "allocated": 10360
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 485532.42938701925,
            "unit": "ns",
            "range": "± 4318.397551323325",
            "allocated": 1120
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 327207.6086077009,
            "unit": "ns",
            "range": "± 2591.520214658375",
            "allocated": 10472
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 420276.29026442306,
            "unit": "ns",
            "range": "± 1455.235337986657",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 490044.6669921875,
            "unit": "ns",
            "range": "± 2239.752142797757",
            "allocated": 1128
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 19090004.58653846,
            "unit": "ns",
            "range": "± 131068.62265431933",
            "allocated": 1923210
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 39778.916666666664,
            "unit": "ns",
            "range": "± 618.7612931323257",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 43491.46153846154,
            "unit": "ns",
            "range": "± 407.4769145576666",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 356059.09157151444,
            "unit": "ns",
            "range": "± 1039.816402203269",
            "allocated": 16016
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 212727.24532376803,
            "unit": "ns",
            "range": "± 702.1437316842727",
            "allocated": 6440
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 195026.09174053484,
            "unit": "ns",
            "range": "± 881.06804170347",
            "allocated": 6448
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 296633.8309795673,
            "unit": "ns",
            "range": "± 1796.0885989702572",
            "allocated": 16048
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "DJGosnell",
            "email": "DJGosnell@users.noreply.github.com",
            "username": "DJGosnell"
          },
          "committer": {
            "name": "GitHub",
            "email": "noreply@github.com",
            "username": "web-flow"
          },
          "id": "352502f705af75b638015553d693c0623581c655",
          "message": "Fix QRY044 false-positive when InterceptorsNamespaces has multiple entries (#265)\n\n* fix(analyzers): route QRY044 input through a pipe-delimited alt property (#264)\n\nRoslyn's editorconfig key-value regex treats `;` (and `#`) inside a value as\nan inline-comment marker, truncating the captured value at the first such\ncharacter. Reading `build_property.InterceptorsNamespaces` directly therefore\nunder-reads any multi-entry list — including the normal case where\n`Quarry.targets` auto-appends `Quarry.Generated` — and QRY044 fires for\nnamespaces that are in fact opted in.\n\nFix: expose a sibling MSBuild property `QuarryInterceptorsNamespaces` whose\nvalue is the same list with `;` replaced by `|`. `|` is never a legal C#\nnamespace character, so the substitution is lossless and survives Roslyn's\nparser intact. Computation is done in a target that runs before\n`GenerateMSBuildEditorConfigFileCore` so the replacement sees the final\n`InterceptorsNamespaces` value after every upstream .props / csproj /\n.targets contribution has folded in. The analyzer prefers the pipe property\nand falls back to the raw semicolon property only when the pipe one is\nabsent (consumers pinned to older Quarry versions).\n\nTest coverage:\n- Five pipe-path scenarios (covering leading `|`, target-not-last,\n  duplicates, target absent).\n- Two legacy-fallback scenarios.\n- One precedence test (both properties set — pipe wins).\n\nPart 1 of 3 for #264. Quarry.targets mirror (so consumers without\nQuarry.Generator still get the alt property) and doc touch-ups follow in\nseparate commits.\n\n* fix(Quarry.targets): also expose QuarryInterceptorsNamespaces (#264)\n\nMirror the QuarryInterceptorsNamespaces computation from Quarry.Generator.props\ninto Quarry.targets so every Quarry consumer picks up the alt property the\nQRY044 analyzer needs — not just consumers who have Quarry.Generator in their\npackage graph. Quarry.Generator is usually pulled in transitively, but a\nconsumer who references only Quarry (e.g. with the generator and analyzer\nshipped via other means, or pinned via PrivateAssets configurations) should\nstill get the working property.\n\nBoth the props-side and targets-side targets run BeforeTargets=\n\"GenerateMSBuildEditorConfigFileCore\" and set the same property to the same\nvalue, so having both imported is a no-op duplicate rather than a conflict.\n\nPart 2 of 3 for #264.\n\n* chore: remediate review findings for #264 (B/#8, B/#13, B/#22)\n\nReview classifications addressed inline:\n- B/#8 (Correctness): added comments in Quarry.Generator.props and\n  Quarry.targets documenting reliance on the Roslyn-internal\n  GenerateMSBuildEditorConfigFileCore target name and the silent-\n  fallback-to-legacy failure mode if it's renamed in a future SDK.\n- B/#13 (Tests): added EmptyPipeValueFallsBackToLegacyProperty test\n  covering the case where QuarryInterceptorsNamespaces is exposed but\n  empty-string and the analyzer must fall through to the semicolon\n  property. 117 passing (+1 from 116).\n- B/#22 (Consistency): moved the long XML comment out of the\n  <ItemGroup> (where it sat adjacent to but didn't describe a\n  CompilerVisibleProperty item) to above the <Target> it actually\n  describes.\n\nNo behavior changes; all code-path coverage stays the same.\n\n* chore(session): record PR #265 + add pr-body.md artifact\n\n* chore: remove session artifacts before merge",
          "timestamp": "2026-04-24T15:56:12Z",
          "url": "https://github.com/Dtronix/Quarry/commit/352502f705af75b638015553d693c0623581c655"
        },
        "date": 1777049279198,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18758.760915902945,
            "unit": "ns",
            "range": "± 119.7390250605273",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8914.196534293038,
            "unit": "ns",
            "range": "± 108.67640706104386",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 19697.098098754883,
            "unit": "ns",
            "range": "± 358.19109638474106",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 181748.03283691406,
            "unit": "ns",
            "range": "± 2185.916542319036",
            "allocated": 27152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 32690.243848528182,
            "unit": "ns",
            "range": "± 514.8125481635477",
            "allocated": 2568
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 53788.04691859654,
            "unit": "ns",
            "range": "± 543.3739906726545",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 86138.28432053786,
            "unit": "ns",
            "range": "± 467.7140615155798",
            "allocated": 8312
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 105031.82089468148,
            "unit": "ns",
            "range": "± 672.5460832713289",
            "allocated": 8752
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 103665.9174992488,
            "unit": "ns",
            "range": "± 695.9865216778416",
            "allocated": 8624
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 105957.83453838642,
            "unit": "ns",
            "range": "± 700.9314456734821",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 46921.11538461538,
            "unit": "ns",
            "range": "± 452.01171416633633",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 51071.846153846156,
            "unit": "ns",
            "range": "± 389.1991448589968",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 186373.42888532366,
            "unit": "ns",
            "range": "± 2071.047530592741",
            "allocated": 27096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16092.087623596191,
            "unit": "ns",
            "range": "± 108.0359127599024",
            "allocated": 1336
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17747.818380502555,
            "unit": "ns",
            "range": "± 67.74699259762545",
            "allocated": 1664
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 80550.95412034255,
            "unit": "ns",
            "range": "± 496.54356147971424",
            "allocated": 9008
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 125648.03846153847,
            "unit": "ns",
            "range": "± 912.5233892330847",
            "allocated": 15648
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 56165.88461538462,
            "unit": "ns",
            "range": "± 415.1958450461538",
            "allocated": 1592
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 135429.32763671875,
            "unit": "ns",
            "range": "± 886.3710207500991",
            "allocated": 14464
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 379304.32421875,
            "unit": "ns",
            "range": "± 1907.250654220142",
            "allocated": 47424
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 34601.2657623291,
            "unit": "ns",
            "range": "± 108.66211932269019",
            "allocated": 3976
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 34565.36036095252,
            "unit": "ns",
            "range": "± 366.0345056338009",
            "allocated": 3984
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 197417.32889229912,
            "unit": "ns",
            "range": "± 1928.472780380061",
            "allocated": 29152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 88419.02515520368,
            "unit": "ns",
            "range": "± 1079.3470676862828",
            "allocated": 10400
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 88375.27216984675,
            "unit": "ns",
            "range": "± 310.25815763378404",
            "allocated": 9112
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 117716.20022348258,
            "unit": "ns",
            "range": "± 664.081264536932",
            "allocated": 9048
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 75668.86117788461,
            "unit": "ns",
            "range": "± 325.9744021953669",
            "allocated": 9832
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 34036.013667179985,
            "unit": "ns",
            "range": "± 194.54399807144907",
            "allocated": 2088
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 102103.97601787861,
            "unit": "ns",
            "range": "± 495.76292578552386",
            "allocated": 10360
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 482044.84344951925,
            "unit": "ns",
            "range": "± 2050.6099301376985",
            "allocated": 1120
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 330249.29338191106,
            "unit": "ns",
            "range": "± 1717.3685833558088",
            "allocated": 10472
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 412802.85099909856,
            "unit": "ns",
            "range": "± 1356.474151129979",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 490975.5205078125,
            "unit": "ns",
            "range": "± 3741.9149965884753",
            "allocated": 1128
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 19492403.86607143,
            "unit": "ns",
            "range": "± 183993.7931464737",
            "allocated": 1923200
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 41607.46153846154,
            "unit": "ns",
            "range": "± 663.3447589532681",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 43896.433333333334,
            "unit": "ns",
            "range": "± 795.5322087999299",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 368446.59821965144,
            "unit": "ns",
            "range": "± 1235.8912437772385",
            "allocated": 16016
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 212535.4649483817,
            "unit": "ns",
            "range": "± 1259.977176945799",
            "allocated": 6440
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 199498.4134803185,
            "unit": "ns",
            "range": "± 1502.7572324876246",
            "allocated": 6448
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 300907.2870744978,
            "unit": "ns",
            "range": "± 2735.0129026225795",
            "allocated": 16048
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "DJGosnell",
            "email": "DJGosnell@users.noreply.github.com",
            "username": "DJGosnell"
          },
          "committer": {
            "name": "GitHub",
            "email": "noreply@github.com",
            "username": "web-flow"
          },
          "id": "920e8625e71031b336d527700f7956af4a89cb64",
          "message": "Fix Npgsql 10 parameter-binding mismatch on PostgreSQL (redux of #258) (#266)\n\n* Add Testcontainers helper + Npgsql parameter-binding regression probe (#258)\n\nPhase 1 of the redux fix. Adds Testcontainers.PostgreSql 4.* to\nQuarry.Tests and a lazy, process-wide PostgreSqlContainer helper so every\nintegration test routes through a single container instance.\n\nMoves the DESIGN-phase empirical probe into NpgsqlParameterBindingTests\nas long-term regression documentation. Five tests (A–E) encode against a\nreal Npgsql 10 + PG 17 container which ParameterName/SQL configurations\nNpgsql accepts, proving that:\n - @pN SQL + @pN name works (rewrite path),\n - $N SQL + @pN name fails (the v0.3.0 state — original #258),\n - $N SQL + $N name fails (the v0.3.1/0.3.2 state — PR #261),\n - $N SQL + empty/unset name works (native positional binding, the\n   configuration Phases 2–3 will make Quarry emit on PostgreSQL).\n\n* Return empty ParameterName for PostgreSQL in SqlFormatting (#258)\n\nPhase 2 of the redux fix. SqlFormatting.GetParameterName now returns\nstring.Empty on PostgreSQL instead of \"$N+1\". This is what makes\nNpgsql 10 use native positional binding against the $N placeholders that\nFormatParameter already emits — the only configuration the Phase 1\nprobe proved works on Npgsql 10.\n\nAlso fixes MigrationRunner.AddParameter and Quarry.Tool's\nMigrateCommands.AddParameter, both of which route DbParameter.ParameterName\nthrough GetParameterName — this is what closes the original #258 bug\nobserved in v0.3.0 and re-surfaced in v0.3.1 / v0.3.2.\n\nTests:\n - DialectTests.GetParameterName_ReturnsNameForDbParameter: PostgreSQL\n   TestCases flip from \"$1\"/\"$6\" to \"\"/\"\".\n - DialectTests.GetParameterName_MatchesFormatParameter_ForNamedDialects:\n   PostgreSQL dropped — it is no longer a name-binding dialect from\n   Quarry's perspective; the new invariant is \"PG ParameterName is empty\".\n - DialectTests.GetParameterName_IsAlwaysEmpty_ForPostgreSQL: new\n   regression guard.\n\n* Emit empty ParameterName for PostgreSQL in generator (#258)\n\nPhase 3 of the redux fix. The three generator sites that assign\nDbParameter.ParameterName now route PostgreSQL through the empty-string\nliteral, matching what SqlFormatting.GetParameterName returns for PG at\nruntime:\n\n - CarrierEmitter.FormatParamName         → \"\"  (compile-time constant)\n - CarrierEmitter.EmitParamNameExpr       → \"\\\"\\\"\"  (C# literal \"\")\n - TerminalBodyEmitter batch-insert       → \"\\\"\\\"\"\n - TerminalEmitHelpers diag param-name    → \"\\\"\\\"\"\n\nThe SQL-text side is untouched: FormatParameter still emits $N on PG,\nTerminalEmitHelpers.EmitCollectionPartsPopulation still builds $N string\narrays for IN-clause expansion, and BatchInsertSqlBuilder still uses $N.\n\nThis makes every generated entity-insert, batch-insert, WHERE-clause,\nORDER-BY, LIMIT/OFFSET, and diag parameter path on PG ship DbParameter\ninstances with empty ParameterName — the configuration the Phase 1 probe\nproved works on Npgsql 10.\n\nCarrierGenerationTests regression guards flipped:\n - EntityInsert on PG: asserts `__pN.ParameterName = \"\"` (both empty and\n   does-not-match $N or @pN patterns for defense in depth).\n - BatchInsert on PG: asserts `__p.ParameterName = \"\"` (not .Dollar,\n   not .AtP).\n\nParameterNames.Dollar remains in Quarry.Internal — still used to build\n$N SQL text for IN-clause placeholder arrays.\n\n* Upgrade QueryTestHarness.Pg to real Npgsql connection (#258)\n\nPhase 4 of the redux fix. QueryTestHarness.Pg now attaches to a real\nNpgsqlConnection against the shared Testcontainers PG 17 container\ninstead of MockDbConnection. My and Ss stay on the mock.\n\nIsolation strategy is transactional by default:\n - PostgresTestContainer.EnsureBaselineAsync() creates the shared\n   quarry_test schema, DDL, and seed data exactly once per test process.\n - Each CreateAsync() opens a fresh pooled NpgsqlConnection,\n   SET search_path TO quarry_test, BEGIN.\n - DisposeAsync() ROLLBACKs, closing the connection back to the pool.\n - Near-zero per-test overhead (full suite: +2s for 2990 tests).\n\nTests that need their own schema — migration runner tests,\ntransaction-behavior tests, anything that issues its own BEGIN/COMMIT —\npass useOwnPgSchema: true to CreateAsync(). That path calls\nCreateOwnedSchemaAsync which creates a test_<guid> schema with the\nfull DDL + seed, sets search_path, and DROP SCHEMA CASCADEs on dispose.\n\nPG DDL port of the SQLite harness:\n - Primary keys use GENERATED BY DEFAULT AS IDENTITY (seed with explicit\n   IDs works; subsequent auto-INSERTs auto-generate).\n - REAL → DOUBLE PRECISION (PG's REAL is single-precision, insufficient\n   for the money columns).\n - Identifiers stay double-quoted (case-sensitive, matching the source).\n - DiscountedPrice computed column translates 1:1 to PG 12+ syntax.\n - CREATE VIEW \"Order\" for test-harness table-name aliasing.\n - IDENTITY sequences are advanced past max(seeded_id) after seed so\n   first auto-INSERT doesn't collide.\n\nFull Quarry.Tests suite: 2990/2990 passing (unchanged from pre-upgrade\ncount; the harness change is transparent to existing diagnostic-path\ntests, and no test in the current suite depends on Pg mock-capture\nbehavior that the real connection would break).\n\n* Add focused PG integration tests + fix MigrationRunner DateTime type (#258)\n\nPhases 5–7 combined. Adds the four focused integration tests that drive\nevery generator + runtime code path PR #261 touched, all against the real\nNpgsql 10 + PG 17 container:\n\n - Quarry.Tests/Integration/PostgresIntegrationTests.cs:\n   - EntityInsert_OnPostgreSQL_ExecutesSuccessfully\n     (CarrierEmitter.EmitCarrierInsertTerminal)\n   - InsertBatch_OnPostgreSQL_ExecutesSuccessfully\n     (TerminalBodyEmitter batch path)\n   - WhereInCollection_OnPostgreSQL_ExecutesSuccessfully\n     (TerminalEmitHelpers.EmitCollectionPartsPopulation)\n - Quarry.Tests/Migration/PostgresMigrationRunnerTests.cs:\n   - RunAsync_InsertsHistoryRow_OnPostgreSQL — closes the original #258\n     scenario end-to-end. Uses a per-test fresh PG schema because\n     MigrationRunner issues its own BEGIN/COMMIT, incompatible with\n     QueryTestHarness's outer transactional rollback.\n\nThese tests surfaced a second pre-existing PG bug in MigrationRunner\nthat was hiding behind the parameter-binding bug: InsertHistoryRowAsync\npassed `DateTime.UtcNow.ToString(\"o\")` (a string) for the `applied_at`\nand `started_at` parameters. SQLite's TEXT column tolerated this, but\nPG's `TIMESTAMP NOT NULL` column rejected it with\n`42804: column \"applied_at\" is of type timestamp without time zone but\nexpression is of type text`. Fix: bind the DateTime directly and let\nNpgsql/Microsoft.Data.Sqlite choose the correct wire type. SQLite\ncontinues to pass (Microsoft.Data.Sqlite serialises DateTime to TEXT\ntransparently).\n\nPhases 6 and 7 absorbed into this commit:\n - Phase 6 (helper dedup) is unnecessary: MigrationRunner lives in the\n   Quarry package, not Quarry.Migration, so the migration-runner test\n   belongs in Quarry.Tests alongside the existing SQLite one. No\n   cross-project helper linking needed.\n - Phase 7 (cross-dialect PG triage) produced no work items: the full\n   Quarry.Tests run after the harness upgrade passes with only the\n   single MigrationRunner DateTime bug surfaced above. All 3312 tests\n   green across Quarry.Tests / Quarry.Migration.Tests / Analyzers.Tests.\n\nNote on IQueryBuilder<T> entity-terminal signature mismatch: the\nAddresses/Warehouses reads use an explicit `.Select(x => x.Field)`\nprojection because the entity-terminal fallback has an unrelated\ninterceptor signature mismatch (CS9144) that is out of scope for this\nfix. Using projected terminals keeps the parameter-binding coverage\nclean without fighting that unrelated issue.\n\n* Tighten RawSqlAsync docs around Npgsql binding modes (#258)\n\nPhase 8 of the redux fix. PR #261 left comments in QuarryContext.cs\nthat asserted \"Npgsql 10 strict binding requires the placeholder and\nthe name to agree\" — a framing that's not quite right and that led the\nrest of PR #261 astray. The empirical probe in NpgsqlParameterBindingTests\nshows that Npgsql switches between named- and positional-binding modes\nbased on whether any DbParameter has a ParameterName set, not based\non what CommandText contains.\n\nRawSqlAsync keeps its @pN + @pN pairing. Users write @pN placeholders;\nthe runtime binds ParameterName = @pN. On PostgreSQL Npgsql rewrites\nthe @pN placeholders to native positional — the same code path that\nworks today. The refreshed XML doc + anchor comment now explain why\nmixing conventions (@pN in SQL + empty name, or $N in SQL + @pN name)\nwould flip Npgsql into the wrong mode, and why the chain-API path\n(which emits $N + empty name) is a different contract that Quarry\ncontrols end-to-end.\n\n* Address review findings (#258)\n\nREMEDIATE phase. Nine review findings classified A fixed together:\n\n#4 (critical) — CarrierEmitter.cs:690 collection-parameter expansion\nnow emits `__pc.ParameterName = \"\"` on PostgreSQL. Pre-fix it reused\nthe `__colNParts` array (which holds `$N` strings for SQL text) as\nParameterName, flipping Npgsql back into named-lookup mode — the exact\nv0.3.1/0.3.2 \"C\" failure configuration for any `.Contains(collection)`\nwhere the collection is not a compile-time constant. SQLite / SqlServer\npaths continue to use `__colNParts[__bi]` as the name (they bind by\nname).\n\n#5 (medium) — QueryTestHarness.CreateAsync wraps all setup in\ntry/catch and unwinds partial state on throw: rolls back the PG tx,\ndrops the owned schema if created, disposes Sqlite/Npgsql/Mock\nconnections. Previously a transient mid-setup exception leaked all\nthree connections until process exit.\n\n#6 (low) — PostgresMigrationRunnerTests.TearDown now logs the\nfailure message to TestContext.Out instead of swallowing silently,\nso accumulating orphan schemas are diagnosable without masking the\ntest result.\n\n#11 (high) — WhereInCollection_OnPostgreSQL_ExecutesSuccessfully now\nsources the array from a helper method so SqlExprAnnotator's\nconstant-inlining pass cannot fold it to literal SQL. Verified by\ninspecting the generated interceptor: the `__col0Len` runtime loop\nIS emitted, and this is the test that would have caught #4.\n\n#13 (medium) — Added CarrierGeneration_WhereInCollection_*\ngenerator-level regression guards for PG (empty ParameterName)\nand SQLite (preserves the __colNParts[__bi] assignment).\n\n#16 (low) — PostgresIntegrationTests changed from `internal class`\nto `public class` to match the other two new PG test fixtures.\n\n#20 (info) — PostgresTestContainer.EnsureBaselineAsync is now\nsafe across concurrent test processes sharing one container: probes\nwhether the baseline tables exist before doing any DDL, and gates the\ncritical section with a PostgreSQL advisory lock. No drop-and-recreate.\n\n#25 (medium) — PostgresTestContainer.GetContainerAsync now catches\nDocker-unavailable exceptions (heuristic on type-name / message for\n\"Docker\", \"Testcontainers\", \"daemon\", \"named pipe\"), caches the\nfailure reason, and calls Assert.Ignore with a clear \"Install Docker\nto run the Quarry test suite\" message. Developers without Docker see\na clean Ignored result for every PG-backed test instead of cascading\nexceptions.\n\nFull suite: 2996 Quarry.Tests + 201 Quarry.Migration.Tests + 117\nQuarry.Analyzers.Tests = 3314 passing.\n\nRebuild requirement (#21) is surfaced in the PR body — not a code\nchange.\n\n* Record PR #266 in session log\n\n* Record PR #266 in workflow\n\n* [WIP] Phase 9 bootstrap: OrderBy Pg mirror + NUMERIC DDL bug identified\n\nSuspending mid-Phase-9 for handoff. Full state in\n_sessions/258-fix-npgsql-parameter-naming-redux/handoff.md.\n\nWorking tree:\n - CrossDialectOrderByTests.cs: 4 tests mirrored with pg execution\n - PostgresTestContainer.cs: doc comment updated to describe NUMERIC(18,2)\n   for decimal columns, but the DDL still emits DOUBLE PRECISION (the bug)\n - workflow.md: status=suspended, phase=IMPLEMENT, phase-9 session log entry\n\nVerified failure:\n  CrossDialectOrderByTests.OrderBy_Joined_RightTableColumn on Pg:\n  'Reading as System.Decimal is not supported for fields having\n  DataTypeName double precision'\n\nNext session should (a) fix decimal columns to NUMERIC(18, 2), (b) re-run\nOrderBy tests green, (c) roll the pattern across the other ~25 files\nsmallest-first per handoff.md.\n\nPR #266 is not affected by this WIP — it is rebased + CI-green on an\nearlier commit and remains mergeable today.\n\n* Fix decimal column DDL in PG test harness (NUMERIC vs DOUBLE PRECISION) (#258)\n\nPostgresTestContainer.CreateSchemaObjectsAsync emitted DOUBLE PRECISION\nfor every decimal-backed column (orders.Total, order_items.UnitPrice/\nLineTotal, accounts.Balance/credit_limit, products.Price/DiscountedPrice)\nbecause the SQLite source schema used REAL for all non-integer numerics.\n\nPG's DOUBLE PRECISION is IEEE 754 binary float (= .NET double); Npgsql\nrefuses GetDecimal on a double-precision column (\"Reading as 'System.Decimal'\nis not supported for fields having DataTypeName 'double precision'\").\n\nProduction DDL is unaffected: Quarry/Migration/SqlTypeMapper.cs already\nmaps decimal -> numeric(p,s) on PostgreSQL. Bug was contained to the test\nharness port from SQLite.\n\nUnblocks Phase 9 Pg-execute mirror in CrossDialectOrderByTests.OrderBy_\nJoined_RightTableColumn (decimal tuple assertions) and any later test that\nreads a decimal column on Pg.\n\nTests: 2996 / 2996 (Quarry.Tests) - no regressions.\n\n* Phase 9: mirror Pg execution across all CrossDialect tests (#258)\n\nLite-only `await lt.ExecuteXxxAsync()` blocks now mirrored with the\nparallel `await pg.ExecuteXxxAsync()` block applying the same assertions\nto the Pg result, across 22 CrossDialect*Tests files in src/Quarry.Tests/\nSqlOutput (~233 mirror blocks added). This closes the test-coverage gap\nthat hid PR #261's Npgsql parameter-naming regression: cross-dialect\ntests previously only verified SQL-string shape on Pg, never executed\nthrough the real provider.\n\nTest-harness DDL alignment with `Quarry.Migration.SqlTypeMapper`\n(`PostgresTestContainer.CreateSchemaObjectsAsync`):\n- Col<bool>          INTEGER     -> BOOLEAN          (+seed 1/0 -> TRUE/FALSE)\n- Col<DateTime>      TEXT        -> TIMESTAMP\n- Col<DateTimeOffset>TEXT        -> TIMESTAMPTZ\n- FOREIGN KEYs from SQLite source dropped: SQLite does not enforce FKs\n  by default; replicating them in PG breaks delete-tests that legitimately\n  depend on no FK enforcement.\n\nThree PG-vs-Lite divergences triaged inline:\n- `Select_Distinct`: pgResults sorted by UserId before assertions; PG\n  does not guarantee insertion-order return without ORDER BY.\n- `Join_Distinct_OrderBy_Limit`: Pg execution intentionally not mirrored;\n  PG rejects DISTINCT with ORDER BY on a non-projected column (42P10),\n  which SQLite tolerates. SQL-text assertion still verifies generator\n  output is identical across dialects.\n- `Cte_TwoChainedWiths_DistinctDtos_CapturedParams`: workaround for an\n  unrelated Quarry source-generator bug in chained-With dispatch\n  (variable renamed `orderCutoff` -> `cutoff` so the closure shape\n  matches Chain_3's expected fields). Bug to be filed as a follow-up\n  issue at REMEDIATE; out of scope for #258.\n\n`quarry-manifest.postgresql.md` regenerated by the source generator to\nreflect the expanded Pg execution surface.\n\nTests: 2996 + 201 + 117 = 3314, all green.\n\n* Reference follow-up issues #267 and #268 in Phase 9 triage comments\n\nIssues filed:\n- #267 — Generator emits non-portable SELECT DISTINCT + ORDER BY on PG (42P10).\n  Skipped Pg execution in Join_Distinct_OrderBy_Limit; comment now points to\n  the tracking issue and notes the re-enable condition.\n- #268 — Source generator chained-With dispatch resolves wrong closure-field\n  extractor by structural shape. Comment in Cte_TwoChainedWiths_DistinctDtos\n  _CapturedParams now points to #268 and notes that \"cutoff\" should be\n  reverted to \"orderCutoff\" once the generator is fixed.\n\nworkflow.md decision log updated with the issue numbers.\n\n* Add #267/#268 references to pr-body.md (PR #266 body already pushed)\n\n* Archive issue bodies for #269 (MySQL) and #270 (SQL Server)\n\n* Add row-order sort helper + apply at 11 Pg-execute sites (REMEDIATE A/B)\n\nPhase 9 review surfaced a latent flake hazard: 11 cross-dialect tests\nasserted on `pgResults[N]` indexed positions without an explicit\n`ORDER BY` in the chain. PG does not guarantee row order from a base\nscan or join without ORDER BY; the suite passes today only because PG\nhappens to return small-table sequential-scan results in heap order.\nA planner change (statistics, parallel scan, hash join chosen for a\nCTE) would surface as flake in CI.\n\nFix:\n- New `src/Quarry.Tests/PgRowOrderExtensions.cs` exposes\n  `Task<List<T>>.SortedByAsync(keySelector)`. Materialises and sorts\n  the result before assertion. Centralises the rationale comment so\n  future test authors get the explanation in one place.\n- Helper is an extension on Task<List<T>> (not PreparedQuery<T>) so\n  the Quarry chain analyzer (QRY036) still sees `.ExecuteFetchAllAsync()`\n  as the literal terminal at the end of the prepared chain.\n\nSites updated (11):\n- CrossDialectSelectTests.Select_Distinct (replaces inline `.OrderBy(...).ToList()`)\n- CrossDialectNavigationJoinTests.NavigationJoin_Where_ExecutesCorrectly\n- CrossDialectNavigationJoinTests.NavigationJoin_GroupBy_Navigation\n- CrossDialectNavigationJoinTests.NavigationJoin_DeepChain_ExecutesCorrectly\n  (sorts by (ProductName, UserName) since the projection has no ID\n  column; pg-expected values updated to alphabetic-tuple order;\n  lite-expected values stay in insertion order — same asymmetric\n  pattern as Select_Distinct)\n- CrossDialectCteTests (7 sites):\n  - Cte_FromCte_CapturedParam\n  - Cte_FromCte_AllColumns\n  - Cte_TwoChainedWiths_DistinctDtos_CapturedParams\n  - Cte_ThreeChainedWiths_AllUsedDownstream\n  - Cte_TwoChainedWiths_FirstEmptySecondCaptured_CapturedParam\n  - Cte_FromCte_DedicatedDto\n\nCloses review findings #4 (medium, A) and #13 (low, B). Tests:\n2996/2996 green.\n\n* Update pr-body.md with REMEDIATE pass + dual-review summary\n\n* chore: remove session artifacts before merge",
          "timestamp": "2026-04-25T14:57:02Z",
          "url": "https://github.com/Dtronix/Quarry/commit/920e8625e71031b336d527700f7956af4a89cb64"
        },
        "date": 1777132144155,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18375.579696655273,
            "unit": "ns",
            "range": "± 103.85465660667758",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8230.26567186628,
            "unit": "ns",
            "range": "± 96.16534474621608",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18177.070610633262,
            "unit": "ns",
            "range": "± 131.33861904615358",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 188600.16990309494,
            "unit": "ns",
            "range": "± 984.2529087968405",
            "allocated": 27152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 32223.003056117468,
            "unit": "ns",
            "range": "± 338.68840021611595",
            "allocated": 2568
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 53182.22586568197,
            "unit": "ns",
            "range": "± 209.21391573193117",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 85509.13373819987,
            "unit": "ns",
            "range": "± 355.98091209415765",
            "allocated": 8312
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 109724.48072228066,
            "unit": "ns",
            "range": "± 593.430556713258",
            "allocated": 8752
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 105556.87758225661,
            "unit": "ns",
            "range": "± 979.9975053315337",
            "allocated": 8624
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 105982.0340200571,
            "unit": "ns",
            "range": "± 496.9587585032617",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 43771.46153846154,
            "unit": "ns",
            "range": "± 427.40917463725856",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 48357.083333333336,
            "unit": "ns",
            "range": "± 500.8624304561326",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 183795.2729679988,
            "unit": "ns",
            "range": "± 843.819237639796",
            "allocated": 27096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16547.1671295166,
            "unit": "ns",
            "range": "± 173.6868076646324",
            "allocated": 1336
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 18027.41626412528,
            "unit": "ns",
            "range": "± 145.9740409880722",
            "allocated": 1664
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 81465.47467912946,
            "unit": "ns",
            "range": "± 778.1636225204542",
            "allocated": 9008
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 120837.44736842105,
            "unit": "ns",
            "range": "± 859.0881777070521",
            "allocated": 15648
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 56530.9375,
            "unit": "ns",
            "range": "± 674.5711199223796",
            "allocated": 1592
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 139094.87397112165,
            "unit": "ns",
            "range": "± 1184.8926854865317",
            "allocated": 14464
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 413696.8469238281,
            "unit": "ns",
            "range": "± 3692.0788527463365",
            "allocated": 47424
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 34678.64491489955,
            "unit": "ns",
            "range": "± 327.2428853777442",
            "allocated": 3976
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 34643.1528508113,
            "unit": "ns",
            "range": "± 195.89694980470114",
            "allocated": 3984
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 200598.06439208984,
            "unit": "ns",
            "range": "± 1696.6638886461508",
            "allocated": 29152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 89860.80280949519,
            "unit": "ns",
            "range": "± 442.38721098262107",
            "allocated": 10400
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 89858.37653057392,
            "unit": "ns",
            "range": "± 378.65816273582453",
            "allocated": 9112
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 126139.14518855169,
            "unit": "ns",
            "range": "± 543.600909989772",
            "allocated": 9048
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 75133.9407865084,
            "unit": "ns",
            "range": "± 202.04355216870562",
            "allocated": 9832
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 33824.92946879069,
            "unit": "ns",
            "range": "± 123.80891069815655",
            "allocated": 2088
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 101379.03035794772,
            "unit": "ns",
            "range": "± 790.6908794903683",
            "allocated": 10360
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 487045.0398995536,
            "unit": "ns",
            "range": "± 2714.642832349709",
            "allocated": 1120
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 333833.3535970052,
            "unit": "ns",
            "range": "± 1336.0081248477418",
            "allocated": 10472
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 410313.97216796875,
            "unit": "ns",
            "range": "± 1426.006624678667",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 491075.4498697917,
            "unit": "ns",
            "range": "± 2025.1568330894283",
            "allocated": 1128
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 19225022.088942308,
            "unit": "ns",
            "range": "± 102380.59010387046",
            "allocated": 1923200
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 42233.52631578947,
            "unit": "ns",
            "range": "± 1278.2083689382953",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 45693.25,
            "unit": "ns",
            "range": "± 441.8514833440455",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 371340.5763221154,
            "unit": "ns",
            "range": "± 2526.324168756444",
            "allocated": 16016
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 211731.98161433294,
            "unit": "ns",
            "range": "± 820.2459773347741",
            "allocated": 6440
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 195272.60071739784,
            "unit": "ns",
            "range": "± 1229.1143053729704",
            "allocated": 6448
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 292553.3020958534,
            "unit": "ns",
            "range": "± 1322.712810124158",
            "allocated": 16048
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "DJGosnell",
            "email": "DJGosnell@users.noreply.github.com",
            "username": "DJGosnell"
          },
          "committer": {
            "name": "GitHub",
            "email": "noreply@github.com",
            "username": "web-flow"
          },
          "id": "991e1bc6c9bfc29408833d04cec27fdedcc962f3",
          "message": "Mirror PG execution coverage to MySQL: Testcontainers.MySql + real MySqlConnection on My + cross-dialect mirror (#271)",
          "timestamp": "2026-04-25T16:59:22Z",
          "url": "https://github.com/Dtronix/Quarry/commit/991e1bc6c9bfc29408833d04cec27fdedcc962f3"
        },
        "date": 1777139547545,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18529.010072980607,
            "unit": "ns",
            "range": "± 226.61457128402353",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8381.789399283272,
            "unit": "ns",
            "range": "± 103.18392847576362",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18753.591136387415,
            "unit": "ns",
            "range": "± 205.22486427325006",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 192469.0976388114,
            "unit": "ns",
            "range": "± 1440.6745415423763",
            "allocated": 27152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 31964.51641845703,
            "unit": "ns",
            "range": "± 359.67229786996666",
            "allocated": 2568
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 53707.481419154574,
            "unit": "ns",
            "range": "± 501.78060670986224",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 85112.75743611653,
            "unit": "ns",
            "range": "± 519.9087125424268",
            "allocated": 8312
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 106304.81160794772,
            "unit": "ns",
            "range": "± 732.9649788920734",
            "allocated": 8752
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 107419.92987530048,
            "unit": "ns",
            "range": "± 485.9047802017179",
            "allocated": 8624
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 105316.44277518136,
            "unit": "ns",
            "range": "± 1021.1651618790878",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 45663.153846153844,
            "unit": "ns",
            "range": "± 408.3447983738428",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 49367.583333333336,
            "unit": "ns",
            "range": "± 659.5180689968496",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 185000.73736102766,
            "unit": "ns",
            "range": "± 633.897763898392",
            "allocated": 27096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16547.932631272535,
            "unit": "ns",
            "range": "± 42.47583797440615",
            "allocated": 1336
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 18013.64502422626,
            "unit": "ns",
            "range": "± 80.49430763981518",
            "allocated": 1664
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 82114.9459791917,
            "unit": "ns",
            "range": "± 337.564349441208",
            "allocated": 9008
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 123304.6875,
            "unit": "ns",
            "range": "± 2411.824281016343",
            "allocated": 15648
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 52098.61538461538,
            "unit": "ns",
            "range": "± 447.4391091648744",
            "allocated": 1592
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 139754.66209059494,
            "unit": "ns",
            "range": "± 711.157496624485",
            "allocated": 14464
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 382247.58225661056,
            "unit": "ns",
            "range": "± 1691.966904134446",
            "allocated": 47424
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 33959.27791654147,
            "unit": "ns",
            "range": "± 234.76999670389665",
            "allocated": 3976
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 35631.453063964844,
            "unit": "ns",
            "range": "± 127.7374965263271",
            "allocated": 3984
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 197575.2764423077,
            "unit": "ns",
            "range": "± 1176.5156684885224",
            "allocated": 29152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 89135.47888183594,
            "unit": "ns",
            "range": "± 442.1022129226484",
            "allocated": 10400
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 92024.22889927456,
            "unit": "ns",
            "range": "± 600.8823280633975",
            "allocated": 9112
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 119152.37781700722,
            "unit": "ns",
            "range": "± 647.251015908921",
            "allocated": 9048
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 75612.72783406575,
            "unit": "ns",
            "range": "± 381.46506578984946",
            "allocated": 9832
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 34118.84998028095,
            "unit": "ns",
            "range": "± 316.9801800343873",
            "allocated": 2088
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 100170.18216378348,
            "unit": "ns",
            "range": "± 1059.2693081529108",
            "allocated": 10360
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 485250.70094651444,
            "unit": "ns",
            "range": "± 1412.7031103366037",
            "allocated": 1120
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 322594.79371995194,
            "unit": "ns",
            "range": "± 1962.0849075107055",
            "allocated": 10472
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 411735.63303786056,
            "unit": "ns",
            "range": "± 1428.505722780924",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 492360.5636858259,
            "unit": "ns",
            "range": "± 3641.2293922879976",
            "allocated": 1128
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 18728448.817307692,
            "unit": "ns",
            "range": "± 91425.50617409115",
            "allocated": 1923210
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 38780.333333333336,
            "unit": "ns",
            "range": "± 525.6385438567827",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 42340.416666666664,
            "unit": "ns",
            "range": "± 382.44083519446826",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 374199.3058035714,
            "unit": "ns",
            "range": "± 3133.811321923705",
            "allocated": 16016
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 214769.7874286358,
            "unit": "ns",
            "range": "± 1079.1185609241152",
            "allocated": 6440
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 195969.11365685097,
            "unit": "ns",
            "range": "± 876.7549846332915",
            "allocated": 6448
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 294397.9610072545,
            "unit": "ns",
            "range": "± 2346.385010674897",
            "allocated": 16048
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "DJGosnell",
            "email": "DJGosnell@users.noreply.github.com",
            "username": "DJGosnell"
          },
          "committer": {
            "name": "GitHub",
            "email": "noreply@github.com",
            "username": "web-flow"
          },
          "id": "a55b5786174a49e18ae4dbb9ba7f3b78972a24f1",
          "message": "Mirror PG execution coverage to SQL Server: Testcontainers.MsSql + real SqlConnection on Ss + cross-dialect mirror (#270) (#276)\n\n* Add Testcontainers.MsSql + MsSqlTestContainer skeleton + Docker probe (#270)\n\nPhase 1 of mirroring PR #266's PG execution coverage to SQL Server.\nAdds Testcontainers.MsSql 4.* to Quarry.Tests, a lazy process-wide\nMsSqlContainer helper that mirrors PostgresTestContainer's shape, and a\nsingle regression-probe test confirming the MS SQL 2022 container boots\nand accepts a connection.\n\nEnsureBaselineAsync / CreateOwnedSchemaAsync are stubbed with\nNotImplementedException — Phase 2 will implement the schema DDL,\nquarry_test_user mapped login, and seed data, then upgrade\nQueryTestHarness.Ss off MockDbConnection.\n\nTests:\n - MsSqlContainerSmokeTests.SqlServerContainer_BootsAndAcceptsConnection:\n   boots the container, runs SELECT @@VERSION, asserts the banner\n   contains \"SQL Server\".\n\nThe smoke test pays the ~30s cold-start cost only once per process; the\nshared container is reused across all later SQL Server integration\ntests by virtue of MsSqlTestContainer's static-field caching.\n\n* Port schema DDL to SQL Server + upgrade QueryTestHarness.Ss to real SqlConnection (#270)\n\nPhase 2 of the SQL Server execution-mirror work. QueryTestHarness.Ss now\nattaches to a real Microsoft.Data.SqlClient SqlConnection against the\nshared Testcontainers SQL Server 2022 container instead of MockDbConnection.\nLite, Pg, and Ss are all on real providers; My stays on the mock (covered\nby the parallel issue #269).\n\nIsolation strategy is transactional by default and mirrors PG's pattern:\n - MsSqlTestContainer.EnsureBaselineAsync() creates the shared\n   quarry_test schema, the quarry_test_user login + db user (default\n   schema = quarry_test, db_owner role), the test tables, and the seed\n   data — all gated by sp_getapplock so concurrent test processes can\n   share one container without racing on setup.\n - Each CreateAsync() opens a fresh pooled SqlConnection authenticated\n   as quarry_test_user. The default-schema mapping makes unqualified\n   [users] from SsDb resolve to [quarry_test].[users] without any\n   per-connection SET equivalent (SQL Server has no search_path).\n - DisposeAsync() ROLLBACKs and closes the connection back to the pool.\n - Near-zero per-test overhead.\n\nTests that need their own schema — migration runner tests, transaction-\nbehavior tests, anything that issues its own BEGIN/COMMIT — pass\nuseOwnSsSchema: true to CreateAsync(). That path provisions a per-harness\nschema test_<guid> and a dedicated short-lived login (default schema\npoints at the new schema), connects as that login with no transaction,\nand drops the schema/user/login on dispose. SQL Server has no\nDROP SCHEMA CASCADE; teardown drops tables explicitly first.\n\nSQL Server DDL port (per Quarry.Migration.SqlTypeMapper.MapSqlServer):\n - Primary keys use INT IDENTITY(1,1). Seed inserts toggle\n   SET IDENTITY_INSERT ... ON/OFF to supply explicit IDs. SQL Server\n   tracks the high-water mark internally, so no PG-style setval step.\n - Money / decimal columns use DECIMAL(18, 2).\n - bool columns use BIT (defaults are 1/0, not TRUE/FALSE).\n - DateTime → DATETIME2; DateTimeOffset → DATETIMEOFFSET.\n - Identifiers are square-bracket quoted to match the SqlServer\n   manifest emission.\n - Computed column: AS (...) PERSISTED instead of GENERATED ... STORED.\n - FK constraints stay omitted (same SQLite-parity reasoning as PG).\n\nNo generator changes are required for SQL Server: Microsoft.Data.SqlClient\nalready accepts @pN SQL with @pN parameter names — the configuration\nQuarry's existing emit produces. The Phase 4 mirror should pass on the\nexisting emit.\n\nNo new test sites in this phase; existing 2997 baseline still passes.\nPhase 3 will introduce the first Ss-execute integration tests.\n\n* Add Ss-execute integration tests + fix OUTPUT-clause placement on SqlServer (#270)\n\nPhase 3 of the SQL Server execution-mirror work.\n\nNew integration tests (5):\n - SqlServerIntegrationTests.EntityInsert_OnSqlServer: single-entity INSERT\n   with OUTPUT INSERTED. Reads back via Where + Select projection.\n - SqlServerIntegrationTests.InsertBatch_OnSqlServer: multi-row batch\n   insert via ExecuteNonQueryAsync.\n - SqlServerIntegrationTests.WhereInCollection_OnSqlServer: runtime-\n   expanded IN clause via the BuildWantedIds method-call shape that\n   defeats the generator's constant-inlining pass.\n - SqlServerMigrationRunnerTests.RunAsync_InsertsHistoryRow_OnSqlServer:\n   end-to-end MigrationRunner regression test, symmetric to the\n   PostgresMigrationRunnerTests guard.\n\nGenerator fix surfaced by EntityInsert: RenderInsertSql /\nRenderBatchInsertSql were emitting the OUTPUT INSERTED.[Id] clause AFTER\nthe VALUES clause for SqlServer, which is invalid SQL Server syntax\n(\"Incorrect syntax near 'OUTPUT'\"). The OUTPUT clause must precede VALUES.\nFixed both render paths; for batch insert the OUTPUT is folded into the\nprefix and the trailing returning suffix is suppressed for SqlServer.\nOther dialects (RETURNING for SQLite/PG, ; SELECT LAST_INSERT_ID() for\nMySQL) are unchanged.\n\nTest assertions updated (18 cross-dialect insert sites across 5 files):\nPrepareIntegrationTests, CrossDialectBatchInsertTests, CrossDialectEnum\nTests, CrossDialectInsertTests, CrossDialectTypeMappingTests. The\nquarry-manifest.sqlserver.md regenerates automatically.\n\nHarness wiring: the transactional-rollback path now uses raw `BEGIN\nTRANSACTION` / `ROLLBACK TRANSACTION` SQL commands instead of\nSqlConnection.BeginTransaction(), because SqlClient requires every\nSqlCommand to have its `Transaction` property assigned when an explicit\nSqlTransaction is open — and Quarry's QueryExecutor builds DbCommands\ngenerically. Server-side semantics are identical.\n\nMsSqlTestContainer also gained CreateEmptySchemaAsync and a dynamic\nDROP loop in DropOwnedSchemaAsync so migration-runner tests can drop\ntheir __quarry_migrations + demo tables on teardown without listing\nthem explicitly.\n\nTests: 2997 baseline + 4 new Ss-execute integration tests = 3001.\nAll green.\n\n* Mirror Pg-execute coverage to Ss across 22 cross-dialect files (#270)\n\nPhase 4 of the SQL Server execution-mirror work. Adds parallel\n`await ss.Execute*Async(...)` blocks to every `await pg.Execute*Async(...)`\nsite across 22 CrossDialect*Tests files: 259 new ss execute sites,\nmechanically mirroring the assertion shape of the PG counterpart.\n\nHelper rename: PgRowOrderExtensions → RowOrderExtensions. The\nSortedByAsync helper is now used by both Pg-execute and Ss-execute\nmirror sites — SQL Server has the same no-row-order-without-ORDER-BY\nrule as PostgreSQL. Documentation generalised to mention both\nproviders.\n\nSpecial handling:\n - CrossDialectMiscTests, CrossDialectSelectTests, CrossDialectSubquery\n   Tests: tests that destructured `(Lite, Pg, _, _)` were updated to\n   `(Lite, Pg, _, Ss)` so the Ss variable is in scope for the new\n   mirror block.\n - CrossDialectTypeMappingTests.RoundTrip_InsertThenSelect_Preserves\n   MoneyValue: a parallel Ss.Accounts().Insert(...) setup was added so\n   the Ss SELECT mirror has data to read.\n - CrossDialectCompositionTests.Join_Distinct_OrderBy_Limit: skipped on\n   Ss with comment referencing #267 (same DISTINCT + ORDER BY rule that\n   PG hits).\n - CrossDialectCteTests.Cte_TwoChainedWiths_DistinctDtos_CapturedParams:\n   uses the same `cutoff` variable rename PR #266 applied for PG; the\n   underlying chained-With dispatch bug (#268) is dialect-independent.\n\nPhase 4 surfaced 19 Ss-only failures awaiting Phase 5 triage (see\nworkflow.md ## Decisions for the categorisation):\n - 7 SqlDateTime-overflow failures from `default(DateTime)` parameter\n   binding.\n - 9 Int64-to-Int32 cast failures from SQL Server window functions\n   returning BIGINT.\n - 3 case-sensitivity-collation failures from SQL Server's default\n   case-insensitive collation.\n\nTests: 2982 passing, 19 failing on Ss execution path. Fixes land in\nPhase 5 commits, one per category.\n\n* Triage: case-sensitive collation on Ss schema (#270)\n\nPhase 5a triage: makes the SQL Server harness's NVARCHAR columns use\nCOLLATE SQL_Latin1_General_CP1_CS_AS (case-sensitive, accent-sensitive)\ninstead of inheriting the container's default\nSQL_Latin1_General_CP1_CI_AS (case-INsensitive). Aligns string-comparison\nsemantics with SQLite, PostgreSQL, and MySQL — all of which compare\ncase-sensitively by default.\n\nResolves three Ss-only failures from Phase 4:\n - CrossDialectCompositionTests.Where_ContainsRuntimeCollection\n - CrossDialectCompositionTests.Where_Any_And_All_MultipleSubqueries\n - CrossDialectCompositionTests.Join_Where_InClause\n\nEach asserted Count == 0 for lowercase-vs-PascalCase non-matches; SQL\nServer's default collation made those queries match the seed data\n(returning 3, 2, 3 rows respectively).\n\nThe COLLATE override is applied at column declaration only — generated\nSQL is unchanged. Other tests that compare exact-case strings continue\nto work without modification.\n\nTests: 19 failing → 16 failing (3 datetime/Int64 categories remaining).\n\n* Triage: replace default(DateTime) with valid literal in 7 insert tests (#270)\n\nPhase 5b triage. Microsoft.Data.SqlClient binds .NET DateTime parameters\nas SqlDbType.DateTime by default — that type's range is 1753-01-01 to\n9999-12-31, but `default(DateTime)` is 0001-01-01, which produces a\nSqlDateTime overflow at parameter-binding time even though the\nDATETIME2 column would accept the value.\n\nReplaces `CreatedAt = default` / `OrderDate = default` with\n`new DateTime(2024, 1, 1)` in CrossDialectInsertTests and\nCrossDialectEnumTests (the seven tests that surfaced the failure on\nSs execution). The replacement value works for all four dialects;\nthe test's intent (Insert succeeds and returns an identity > 0) is\npreserved on Lite and Pg.\n\nResolves seven Ss-only failures from Phase 4:\n - Insert_SingleUser\n - Insert_SingleOrder\n - ExecuteScalarAsync_SingleUser_ReturnsIdentity\n - ExecuteScalarAsync_SingleOrder_ReturnsIdentity\n - ExecuteNonQueryAsync_SingleUser\n - ExecuteNonQueryAsync_SingleOrder\n - Insert_WithEnumColumn\n\nThe underlying generator behaviour (binding DateTime as DATETIME on\nSs) is preserved — the appropriate generator-side fix (forcing\nSqlDbType.DateTime2 on emitted parameters when the dialect is\nSqlServer) is out of scope for this PR. The new test values stay\nwithin the DATETIME range so this PR's tests remain robust against\nthat fix landing later.\n\nTests: 16 failing → 9 failing (only the Int64-vs-Int32 window-function\ncategory remains).\n\n* Triage: skip Ss execute on 9 window-function sites pending #274 (#270)\n\nPhase 5c triage. SQL Server returns ROW_NUMBER, DENSE_RANK, NTILE,\nCOUNT-over-partition, etc. as BIGINT. Microsoft.Data.SqlClient.SqlData\nReader.GetInt32 does not auto-narrow from BIGINT, so the generator-\nemitted reader fails with InvalidCastException when projecting a\nwindow-function result into an int-typed tuple element. Npgsql narrows\nsilently, which is why PG passes the same projection.\n\nThe fix belongs in the generator (cast-in-SQL on Ss, or read-with-\nGetInt64 on Ss). Filed as a separate issue (#274) to keep this PR\nscope-bounded.\n\nFor the nine affected tests, the Ss-execute block is replaced with a\ncomment referencing #274. The SQL-string emit assertion (in\nQueryTestHarness.AssertDialects above each block) still covers the\ngenerator's Ss output, so the emit-side regression guard is preserved\neven while the runtime side is unverified.\n\nAffected sites:\n - CrossDialectWindowFunctionTests:\n   - WindowFunction_RowNumber_OrderBy\n   - WindowFunction_DenseRank_OrderByDescending\n   - WindowFunction_Joined_RowNumber\n   - WindowFunction_WithWhereClause\n   - WindowFunction_MixedTypePartitionBy\n   - WindowFunction_Ntile_ConstVariable\n   - WindowFunction_Ntile_Variable\n - CrossDialectSetOperationTests:\n   - UnionAll_WithVariableWindowFunctionArg\n   - UnionAll_WithVariableWindowFunctionArg_ParamOffset\n\nTests: 9 failing → 0 failing. Suite is fully green: 3001 / 3001.\n\n* REMEDIATE: address review findings (#270)\n\nAddresses six A-classified review findings (one was documentation-only,\nfolded into the PR body):\n\n1. Mirror two missed pg-execute sites in CrossDialectSchemaTests.cs\n   (Select_SingleColumn, Delete_All_NoWhereClause). The first site also\n   gains the missing `.SortedByAsync(s => s)` to align with the PR #266\n   row-order-flake guard pattern; lt/pg/ss results all sort by the\n   single-column UserName ('Alice' first), preserving the assertion.\n\n2. Tighten MsSqlTestContainer.IsDockerUnavailable: removed the\n   null-forgiving `!` and the redundant `break` from the inner-exception\n   walk; loop now reads as the idiomatic\n   `for (var cur = ex; cur is not null; cur = cur.InnerException)` shape.\n\n3. DropOwnedSchemaAsync now uses SqlConnection.ClearPool(probe) keyed by\n   the per-harness user's connection string instead of\n   SqlConnection.ClearAllPools() (which would evict every other live\n   harness's pool entries). The probe is a non-opened SqlConnection — no\n   authentication round-trip, just connection-string-based pool keying.\n\n4. Tighten the baseline readiness probe:\n    * Renamed SchemaHasUsersTableAsync → SchemaHasSeededTableAsync and\n      pointed it at the LAST seeded table (`shipments`) with a row-count\n      check. A partial-baseline (early tables created but seed never\n      finished) now correctly fails the check.\n    * Made `CREATE SCHEMA` idempotent via\n      `IF NOT EXISTS (sys.schemas) EXEC('CREATE SCHEMA …')`. Recovery\n      from a previously crashed process no longer fails with\n      \"schema already exists\".\n    * Added DropAllObjectsInSchemaAsync call before re-creating tables\n      on the recovery path, so any leftover partial-state objects are\n      purged.\n\n5. Move Ss.Dispose() to AFTER the rollback in QueryTestHarness.DisposeAsync,\n   mirroring the PG path's wrapper-after-rollback ordering. No functional\n   change today (SsDb.Dispose only disposes the wrapper) but removes the\n   footgun for any future change to SsDb.Dispose semantics.\n\nThe OUTPUT-clause emit shape change finding (#27) is documentation-only;\nthe PR body's Breaking Changes section calls it out explicitly. The\nplan-vs-reality finding (#1, #2) is partially addressed by mirroring\nthe SchemaTests sites and noted in the PR body's site-count summary.\n\nTests: 3001 / 3001 still green.\n\n* Add PR body and link in workflow.md (#270)\n\n* chore: remove session artifacts before merge",
          "timestamp": "2026-04-25T22:00:56Z",
          "url": "https://github.com/Dtronix/Quarry/commit/a55b5786174a49e18ae4dbb9ba7f3b78972a24f1"
        },
        "date": 1777157589016,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18661.85855102539,
            "unit": "ns",
            "range": "± 162.06858428627743",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8292.115701528695,
            "unit": "ns",
            "range": "± 57.92113294998399",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18912.683811732702,
            "unit": "ns",
            "range": "± 234.4944575948567",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 183310.38352748327,
            "unit": "ns",
            "range": "± 1434.2587719689393",
            "allocated": 27152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 32445.564819335938,
            "unit": "ns",
            "range": "± 329.28135923356143",
            "allocated": 2568
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 53479.178427559986,
            "unit": "ns",
            "range": "± 452.6409942532725",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 86548.64285982572,
            "unit": "ns",
            "range": "± 475.0062050473982",
            "allocated": 8312
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 111354.28683035714,
            "unit": "ns",
            "range": "± 655.0436474508094",
            "allocated": 8752
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 104153.01131766183,
            "unit": "ns",
            "range": "± 818.578155684488",
            "allocated": 8624
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 107838.63776104267,
            "unit": "ns",
            "range": "± 693.6908825490619",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 45287.85294117647,
            "unit": "ns",
            "range": "± 633.6757788073163",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 50136.60784313725,
            "unit": "ns",
            "range": "± 755.9752926764571",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 186038.48894391741,
            "unit": "ns",
            "range": "± 1608.9655449958411",
            "allocated": 27096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16516.272761753626,
            "unit": "ns",
            "range": "± 157.95166357290714",
            "allocated": 1336
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17862.415041605633,
            "unit": "ns",
            "range": "± 71.92623438323338",
            "allocated": 1664
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 79805.85083946816,
            "unit": "ns",
            "range": "± 691.1305420021497",
            "allocated": 9008
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 125172.65384615384,
            "unit": "ns",
            "range": "± 974.7714985364388",
            "allocated": 15648
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 55987.5,
            "unit": "ns",
            "range": "± 1023.0800555186286",
            "allocated": 1592
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 135185.365234375,
            "unit": "ns",
            "range": "± 547.0671710882009",
            "allocated": 14464
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 389031.8894042969,
            "unit": "ns",
            "range": "± 2725.058013373537",
            "allocated": 47424
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 34268.80178128756,
            "unit": "ns",
            "range": "± 235.56163973704705",
            "allocated": 3976
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 35700.882838657926,
            "unit": "ns",
            "range": "± 362.89804998403713",
            "allocated": 3984
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 194788.70892803484,
            "unit": "ns",
            "range": "± 1012.5549205451043",
            "allocated": 29152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 88134.85812813895,
            "unit": "ns",
            "range": "± 949.8689411803748",
            "allocated": 10400
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 91798.35304478237,
            "unit": "ns",
            "range": "± 750.9704032771247",
            "allocated": 9112
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 120376.6606257512,
            "unit": "ns",
            "range": "± 1073.372722807605",
            "allocated": 9048
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 77396.36442347935,
            "unit": "ns",
            "range": "± 846.3160218287568",
            "allocated": 9832
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 34114.37110314002,
            "unit": "ns",
            "range": "± 261.22424759798105",
            "allocated": 2088
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 100919.62167794364,
            "unit": "ns",
            "range": "± 891.1590523366991",
            "allocated": 10360
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 488455.831124442,
            "unit": "ns",
            "range": "± 3440.9280898255065",
            "allocated": 1120
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 325740.4386858259,
            "unit": "ns",
            "range": "± 2710.4371214652906",
            "allocated": 10472
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 413087.69861778844,
            "unit": "ns",
            "range": "± 2950.763444636314",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 489222.7236328125,
            "unit": "ns",
            "range": "± 3880.61101258574",
            "allocated": 1128
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 18266704.066964287,
            "unit": "ns",
            "range": "± 103446.5719370089",
            "allocated": 1923200
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 39469.153846153844,
            "unit": "ns",
            "range": "± 356.00090031577315",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 43445.4,
            "unit": "ns",
            "range": "± 748.1386235183959",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 354764.8959585336,
            "unit": "ns",
            "range": "± 1264.897324761889",
            "allocated": 16016
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 211166.37295297475,
            "unit": "ns",
            "range": "± 596.1694989951895",
            "allocated": 6440
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 193216.21354166666,
            "unit": "ns",
            "range": "± 465.66773706597456",
            "allocated": 6448
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 296938.2109750601,
            "unit": "ns",
            "range": "± 1817.2846813703197",
            "allocated": 16048
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "DJGosnell",
            "email": "DJGosnell@users.noreply.github.com",
            "username": "DJGosnell"
          },
          "committer": {
            "name": "GitHub",
            "email": "noreply@github.com",
            "username": "web-flow"
          },
          "id": "aebf88d9a6bc37eb3e6b1503d93a20d2a5b1de9f",
          "message": "Fix DISTINCT + ORDER BY non-projected column emits subquery wrap (#267) (#275)\n\n* Fix DISTINCT + ORDER BY non-projected column emits subquery wrap (#267)\n\nPostgreSQL rejected `SELECT DISTINCT <proj> ... ORDER BY <expr>` (42P10) when\n<expr> wasn't in the projection. SQL Server rejected the same construct under\nstandard rules. SQLite/MySQL tolerated it but with implementation-defined row\nselection (one row per projection key picked arbitrarily, ordered by an\nundefined column value).\n\nThe generator now wraps such queries in a derived table on all four dialects:\nthe inner SELECT carries DISTINCT plus the original projection and any ORDER BY\nexpressions that aren't in the projection; the outer SELECT projects the\noriginal columns ordered by the inner aliases, with pagination applied to the\nouter. Detection compares the dialect-rendered SQL strings of ORDER BY\nexpressions against rendered projection-column references — all-in-projection\nkeeps the flat form (regression-guard test included).\n\nBehavior change: chains of the form `OrderBy(non-projected).Distinct().Select(proj)`\nnow return one row per (proj, orderby) pair across all dialects instead of one\nrow per proj with an arbitrary orderby value. The previous SQLite/MySQL\nbehavior was implementation-defined, not contractual; PG was already broken.\n\nThe `Join_Distinct_OrderBy_Limit` cross-dialect SQL assertion is updated to the\nwrap shape (one shape, dialect-specific quoting/pagination only). The PG\nexecute mirror — previously skipped because of 42P10 — is re-enabled and\nasserts the same 3-row result as SQLite. Five focused tests cover the wrap,\nthe regression-guard, multi-column projections, descending direction, and\nmixed in/out-of-projection ORDER BY terms.\n\n* Remediate review findings: param-index threading, refactor, alias readability (#267)\n\nAddresses the structured review on 267-fix-pg-distinct-orderby:\n\nCorrectness\n- Pre-count body params (JOIN/WHERE/GROUP/HAVING) and walk plan.OrderTerms with\n  pre-allocated per-term offsets so the wrap renders extra ORDER BY exprs at the\n  post-body global slot. Without this, a chain like OrderBy(o.Total + bias)\n  with a captured `bias` produced colliding @p slots between ORDER BY and WHERE.\n  Advances paramIndex past all OrderBy slots before pagination.\n- Documented the empty-projection early-return as defensive (Quarry chains\n  always populate Projection.Columns through explicit Select or implicit\n  identity projection); added no-Select regression test.\n\nCodebase consistency\n- Extracted AppendFromAndJoinsForPlan, AppendWhereForMask, AppendGroupByAndHaving.\n  Both RenderSelectSql (flat) and RenderSelectSqlWithDistinctOrderByWrap now share\n  these helpers — eliminates ~110 lines of duplication.\n- Extracted AppendProjectionColumnSql shared by RenderProjectionColumnRef\n  (detection), AppendSelectColumns (flat path), and the wrap's inner-projection\n  emission. Detection and emission can no longer drift.\n\nAliasing readability\n- Inner column aliases now use the projection's PropertyName (or the explicit\n  aggregate Alias) rather than synthetic __c{i}: emits `\"t0\".\"UserName\" AS \"UserName\"`\n  instead of `AS \"__c0\"`. Manifests and diagnostics are noticeably cleaner.\n- Derived table alias: `d` (was `__d`). ORDER BY-only aliases stay synthetic `_o{i}`.\n\nTests added\n- Distinct_OrderBy_NonProjectedExprWithCapturedParam_ThreadsParamIndex:\n  guards the param-slot fix across all four dialects.\n- Distinct_MultipleOrderBy_AllInProjection_NoWrap: regression guard for the\n  flat shape when every ORDER BY term is projected.\n- Distinct_OrderBy_NoExplicitSelect_OrderByEntityColumn_StaysFlat: confirms the\n  implicit-identity projection path doesn't trigger spurious wrapping.\n- Distinct_OrderBy_NonProjected_NavAggregateProjection_KeepsAliasInWrap:\n  exercises the aggregate-keeps-Alias branch via Select((u, OrderCount: u.Orders.Count())).\n- Existing descending test gained SQLite + PG execute mirrors verifying row order.\n\nAll 3005 Quarry.Tests + 117 Quarry.Analyzers.Tests pass.\n\n* Add conditional-mask wrap dispatch test (#267 follow-up)\n\nLocks the `MayNeedDistinctOrderByWrap → canBatch=false` fallback in `Assemble`:\nchain reassignment with `if` produces a 2-mask plan; mask=0 is verified flat\n(`SELECT DISTINCT \"UserName\" ...`) and mask=1 is verified wrap (`SELECT \"d\".\"UserName\"\nFROM (SELECT DISTINCT ... AS \"_o0\" ...)`). Without the per-mask single-rendering\nfallback, the batch fast path would lose the wrap shape on multi-mask chains.\n\nDocuments that GROUP BY + Distinct + OrderBy(non-projected) is unreachable\nthrough the Quarry chain API (after `GroupBy(g).Select(...)` only the GROUP BY\nkey columns and aggregates are in scope, so OrderBy on a non-projected column\ncannot bind), with an explanatory comment in the test file.\n\n* Add release-notes-next.md staging convention (#267 follow-up)\n\nEstablishes a per-PR release-notes staging file at\n`docs/articles/releases/release-notes-next.md` so user-visible changes\naccumulate between tags rather than being reconstructed from PR descriptions\nat release time. The file uses the same Appendix template as\n`release-notes-vX.Y.Z.md` (Highlights / Breaking Changes / New Features /\nBug Fixes / Migration Guide / Stats / Full Changelog) — PRs append entries\nunder the appropriate section as they're merged.\n\n- Seeds the staging file with #267's Behavior Changes + Bug Fixes entry.\n- `llm.md` § Release Notes Workflow documents the contributor side: when\n  to add an entry, when to leave it untouched, and that the file is\n  consumed and deleted by the release skill.\n- `llm-release.md` is updated end-to-end to read the staging file in\n  Phase 1, seed the draft from it in Phase 2.3, then delete it in a new\n  Phase 3.4 so the deletion lands in the same `Release vX.Y.Z` commit.\n\nPR descriptions remain the authoritative source — the staging file is a\ncurated, edited summary that captures the contributor's intended framing\nfor the release.\n\n* chore: remove session artifacts before merge",
          "timestamp": "2026-04-25T23:59:30Z",
          "url": "https://github.com/Dtronix/Quarry/commit/aebf88d9a6bc37eb3e6b1503d93a20d2a5b1de9f"
        },
        "date": 1777164726096,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18490.700735238883,
            "unit": "ns",
            "range": "± 59.121648223566986",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8239.511318751744,
            "unit": "ns",
            "range": "± 64.03901262046563",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18401.548790564902,
            "unit": "ns",
            "range": "± 134.41338158155918",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 185608.07078334264,
            "unit": "ns",
            "range": "± 1217.279497186786",
            "allocated": 27152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 32797.130994524276,
            "unit": "ns",
            "range": "± 510.5340150833223",
            "allocated": 2568
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 54505.27400425502,
            "unit": "ns",
            "range": "± 541.4000201494562",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 85903.29626464844,
            "unit": "ns",
            "range": "± 825.5321416483545",
            "allocated": 8312
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 107891.02401297433,
            "unit": "ns",
            "range": "± 684.7572459349332",
            "allocated": 8752
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 104097.57016225961,
            "unit": "ns",
            "range": "± 382.27488298902625",
            "allocated": 8624
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 104692.51077706473,
            "unit": "ns",
            "range": "± 693.9140901389309",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 46080.916666666664,
            "unit": "ns",
            "range": "± 421.5949064582199",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 50497.38461538462,
            "unit": "ns",
            "range": "± 604.094161874005",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 203636.79816545759,
            "unit": "ns",
            "range": "± 1654.94252362815",
            "allocated": 27096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16550.845642089844,
            "unit": "ns",
            "range": "± 172.7572262625861",
            "allocated": 1336
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17669.076108492336,
            "unit": "ns",
            "range": "± 89.19957927645378",
            "allocated": 1664
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 80968.93183244977,
            "unit": "ns",
            "range": "± 840.6512568074436",
            "allocated": 9008
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 122636.35185185185,
            "unit": "ns",
            "range": "± 3236.8749732716883",
            "allocated": 15640
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 52444.166666666664,
            "unit": "ns",
            "range": "± 598.537814303754",
            "allocated": 1592
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 138077.89189801898,
            "unit": "ns",
            "range": "± 1081.904659632634",
            "allocated": 14464
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 386290.00413161056,
            "unit": "ns",
            "range": "± 1438.147518307934",
            "allocated": 47424
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 34279.79839618389,
            "unit": "ns",
            "range": "± 185.70243388955876",
            "allocated": 3976
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 35488.34800502232,
            "unit": "ns",
            "range": "± 273.8134019280292",
            "allocated": 3984
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 198921.17948091947,
            "unit": "ns",
            "range": "± 1464.861722310395",
            "allocated": 29152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 90389.35693359375,
            "unit": "ns",
            "range": "± 458.2169360163761",
            "allocated": 10400
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 92876.75365339007,
            "unit": "ns",
            "range": "± 522.620454199486",
            "allocated": 9112
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 123198.52627328727,
            "unit": "ns",
            "range": "± 549.2224843248208",
            "allocated": 9048
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 73792.98245004508,
            "unit": "ns",
            "range": "± 362.27453596247415",
            "allocated": 9832
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 34653.01604285607,
            "unit": "ns",
            "range": "± 220.76060573627524",
            "allocated": 2088
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 103458.9289289202,
            "unit": "ns",
            "range": "± 949.4460299873672",
            "allocated": 10360
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 484779.25569661456,
            "unit": "ns",
            "range": "± 1699.405530894685",
            "allocated": 1120
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 331858.8424353966,
            "unit": "ns",
            "range": "± 1324.726113916878",
            "allocated": 10472
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 420167.6883638822,
            "unit": "ns",
            "range": "± 2691.3264680185416",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 489077.9296875,
            "unit": "ns",
            "range": "± 3160.0215765845332",
            "allocated": 1128
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 19026390.214285713,
            "unit": "ns",
            "range": "± 146258.36620382097",
            "allocated": 1923200
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 38968.666666666664,
            "unit": "ns",
            "range": "± 314.0371527914067",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 43488.28571428572,
            "unit": "ns",
            "range": "± 749.6228978699817",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 357301.5448869978,
            "unit": "ns",
            "range": "± 2772.0345371079784",
            "allocated": 16016
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 210427.32679966517,
            "unit": "ns",
            "range": "± 1502.89427281536",
            "allocated": 6440
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 197608.25048828125,
            "unit": "ns",
            "range": "± 1051.456310508929",
            "allocated": 6448
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 315088.68502371653,
            "unit": "ns",
            "range": "± 3246.88184757429",
            "allocated": 16048
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "DJGosnell",
            "email": "DJGosnell@users.noreply.github.com",
            "username": "DJGosnell"
          },
          "committer": {
            "name": "GitHub",
            "email": "noreply@github.com",
            "username": "web-flow"
          },
          "id": "f1968dc96b0577c88b979ad6600b1c9048a80fe0",
          "message": "Cross-dialect test coverage + dialect-rule hardening (#279)\n\n* Add QRA503 (Error) for unexecutable dialect features\n\nSplits the QRA502 dialect rule into two severities:\n- QRA502 Warning — feature is suboptimal but the SQL still executes\n  (MySQL RIGHT JOIN's planner hint).\n- QRA503 Error — the feature produces SQL the dialect physically rejects\n  (MySQL FULL OUTER JOIN; SQL Server OFFSET/FETCH without ORDER BY).\n\nRemoves the stale SQLite RIGHT JOIN / FULL OUTER JOIN rules. SQLite ≥ 3.39\nhas supported both joins since 2022; Microsoft.Data.Sqlite 10.0.3 ships\nSQLite 3.49.1.\n\nTrims the MySQL line from FullOuterJoin SQL-verification tests (now\nprevented from compiling by QRA503).\n\nPhase 1 of the cross-dialect test coverage plan.\n\n* Add QRA503 full-pipeline analyzer integration tests\n\nAdds nine end-to-end tests that drive the analyzer against real C# source\nstrings using AnalyzerTestHelper.GetAnalyzerDiagnosticsAsync. Covers\nMySQL FULL OUTER JOIN (Error), the three other dialects' negative cases,\nand SQL Server OFFSET/FETCH with/without ORDER BY plus the negative\ndialects.\n\nThese complement the existing rule unit tests by exercising the full\npipeline (UsageSiteDiscovery + ContextParser + QuarryQueryAnalyzer\nwiring), so a regression in any of those paths surfaces here.\n\nPhase 2 of the cross-dialect test coverage plan.\n\n* Add QRY070/QRY071 generator integration tests + fix silent drop\n\nThe pipeline emits QRY070 (IntersectAll) / QRY071 (ExceptAll) /\nQRY072 (SetOperationProjectionMismatch) via DiagnosticInfo. The\ndiagnostics route through QuarryGenerator.GetDescriptorById, which\nlooks them up in s_deferredDescriptors — a hand-maintained list that\nsilently drops anything not registered.\n\nThese three descriptors were missing, so the diagnostics never\nreached consumers. The GeneratorTests.cs comment (\"test infrastructure\ncannot fully resolve these\") was a workaround rationalising the\nsilent drop rather than the real cause.\n\nThis commit:\n- Registers the three missing descriptors in s_deferredDescriptors.\n- Adds eight full-pipeline generator integration tests (INTERSECT ALL\n  + EXCEPT ALL × four dialects) using RunGeneratorWithDiagnostics.\n- Removes the obsolete \"cannot test these\" note.\n\nPhase 3 of the cross-dialect test coverage plan.\n\n* Convert ContainsIntegrationTests to cross-dialect execution\n\nReplaces the SQLite-only ContainsIntegrationTests.cs (7 tests) with\nseven 4-dialect tests split between CrossDialectWhereTests (SELECT\npaths) and CrossDialectDeleteTests (DELETE paths). All exercise the\nruntime collection-expansion path that the existing\n\"static-readonly array\" tests don't cover — the inlined-literals\nconstant-folder is bypassed when the collection is captured as a\nlocal List<int> or IEnumerable<int>.\n\nPhase 4 of the cross-dialect test coverage plan.\n\n* Convert CollectionScalarIntegrationTests to cross-dialect execution\n\nReplaces the SQLite-only CollectionScalarIntegrationTests.cs (7 tests\nexercising runtime collection + scalar parameter mixing — regression\nguard for #140) with seven 4-dialect execution tests appended to\nCrossDialectWhereTests.cs in a new \"Collection + scalar — runtime\nparameter mixing\" region.\n\nSQL-shape verification for parameter index shifting on all four\ndialects already lives in CollectionParameterCollisionTests.cs, so the\nnew tests skip Prepare+AssertDialects (matching the Phase 4 pattern)\nand focus purely on row-count correctness across PG, MySQL, SQL Server,\nand SQLite.\n\nPhase 5 of the cross-dialect test coverage plan.\n\n* Consolidate JoinedCarrier tests into CrossDialectJoinTests\n\nJoinedCarrierIntegrationTests.cs was already a 4-dialect file using\nLite/Pg/My/Ss + Prepare + AssertDialects, so this is a deduplicate +\nrelocate rather than a single-dialect → cross-dialect conversion:\n\n- 4 of 8 tests were exact duplicates of existing CrossDialectJoinTests\n  cases (TwoTable basic, PreJoinWhere with IsActive, ThreeTable,\n  FourTable) — deleted outright.\n- The 4 unique tests moved into CrossDialectJoinTests.cs as new\n  regions: Join_WithWhere_CapturedParam_OnRightTable (captured\n  decimal param vs constant-folded literal), Join_FiveTable_Select\n  (Users → Orders → Items → Shipments → Warehouses),\n  Join_SixTable_Select (+ Accounts back-join), and\n  Join_ThreeTable_ScalarAggregate_Count (Sql.Count() +\n  ExecuteScalarAsync<int>).\n\nNet: -4 NUnit methods (3030 → 3026 in Quarry.Tests).\n\nPhase 6 of the cross-dialect test coverage plan.\n\n* Convert JoinNullable LEFT JOIN tests to cross-dialect execution\n\nJoinNullableIntegrationTests.cs had 8 tests:\n\n- 6 SQLite-only LEFT JOIN null-materialization tests verifying that\n  the generated reader returns language defaults (decimal=0, string=\n  null, int=0, enum=default) instead of crashing with InvalidCast when\n  an unmatched outer-join row produces NULLs for NOT-NULL-in-schema\n  columns. Converted to 4-dialect Prepare+AssertDialects+\n  ExecuteFetchAllAsync in a new \"Left Join — null materialization\n  (4-dialect execution)\" region of JoinNullableProjectionTests.cs.\n  Previously only verified on SQLite; now confirmed on PG, MySQL, and\n  SQL Server too.\n\n- 2 already-cross-dialect SQL+metadata tests (RightJoin /\n  FullOuterJoin) deleted as fully redundant: SQL shapes are covered by\n  RightJoin_Select / FullOuterJoin_OnClause in CrossDialectJoinTests,\n  and the IsJoinNullable metadata flag checks are covered by\n  RightJoin_LeftSideColumnsJoinNullable /\n  FullOuterJoin_BothSidesJoinNullable in JoinNullableProjectionTests.\n\nNet: -8 deleted + 6 added = -2 NUnit methods (3026 → 3024 in Quarry.Tests).\n\nPhase 7 of the cross-dialect test coverage plan.\n\n* Convert DateTimeOffset round-trip tests to cross-dialect\n\nPhase 8 has two parts:\n\n1. Wire-up: PgDb / MyDb / SsDb were missing the Events() entity\n   accessor even though the events table was already seeded in all\n   three Testcontainers (PG TIMESTAMPTZ / MySQL DATETIME / SS\n   DATETIMEOFFSET). Added one line per context; the source generator\n   wires up the Pg.Event / My.Event / Ss.Event types from the existing\n   EventSchema.\n\n2. Tests: replaced DateTimeOffsetIntegrationTests.cs (3 SQLite-only\n   tests) with 4 cross-dialect tests in a new \"DateTimeOffset\n   Round-Trip Tests\" region of CrossDialectTypeMappingTests.cs:\n\n   - SelectEvent_LaunchRow_UtcOffset_RoundTripsOnAllDialects\n   - SelectEvent_ReviewRow_NonUtcOffset_PreservesUtcInstantExceptMySql\n   - InsertThenSelect_DateTimeOffset_UtcOffset_RoundTripsOnAllDialects\n   - InsertThenSelect_NullableDateTimeOffset_UtcOffset_RoundTripsOnAllDialects\n\n   Insert tests use UTC-zero offsets so all four dialects round-trip\n   identically. The Review row (offset +02:00) uses .UtcDateTime for\n   instant comparison; MySQL is excluded with a comment explaining\n   that the MySQL DATETIME seed strips the offset entirely (the seed\n   value 14:00 lands at UTC 14:00, while SQLite/PG/SS land at UTC\n   12:00 — a property of MySQL DATETIME storage and the seed choice,\n   not a Quarry round-trip bug).\n\nNet: -3 deleted + 4 added = +1 NUnit method (3024 → 3025 in\nQuarry.Tests).\n\nPhase 8 of the cross-dialect test coverage plan.\n\n* Add cross-dialect execution coverage to PrepareTests\n\nPrepareIntegrationTests.cs already had 4-dialect SQL coverage\n(Prepare on every dialect + AssertDialects) but only executed against\nSQLite. Lifted that intent into a new \"Prepare — 4-dialect execution\"\nregion of PrepareTests.cs with 6 tests:\n\n- Prepare_SingleTerminal_FetchAll_4Dialect\n- Prepare_SingleTerminal_FetchFirst_4Dialect\n- Prepare_MultiTerminal_DiagnosticsThenFetchAll_4Dialect\n  (verifies one prepared chain serves both terminals stably)\n- Prepare_Delete_NoMatch_4Dialect\n- Prepare_Update_NoMatch_4Dialect\n- Prepare_BatchInsert_4Dialect\n\nTwo Integration tests were dropped as redundant:\nMultiTerminal_ToSqlAndFetchAll (just a no-where variant of\nMultiTerminal_DiagnosticsAndFetchAll) and\nMultiTerminal_DiagnosticsAndToSql_SameSql (fully covered by existing\nPrepare_MultiTerminal_ToDiagnosticsAndToSql_ProduceSameSql in\nPrepareTests).\n\nNet: -8 deleted + 6 added = -2 NUnit methods (3025 → 3023 in\nQuarry.Tests).\n\nPhase 9 of the cross-dialect test coverage plan.\n\n* Phase 10: defer [EntityReader] cross-dialect conversion to #277\n\nPhase 10 was originally planned to convert\nIntegration/EntityReaderIntegrationTests.cs to a 4-dialect file.\nInvestigation surfaced a generator bug: [EntityReader] resolves the\nreader's T only in the schema's namespace, so PgDb/MyDb/SsDb\ninterceptors emit IQueryBuilder<Pg.Product, Quarry.Tests.Samples.Product>\ninstead of <…, Pg.Product>. The chain compiles via Unsafe.As<> casts\ninternally but the call site can't accept the projection's static\noutput type for any non-Lite context.\n\nThe two-layer fix (per-context partials/readers + generator-side\nper-context lookup) touches 5+ generator files, adds new IR fields,\nand changes [EntityReader] resolution semantics for every consumer —\northogonal to \"convert SQLite-only tests to cross-dialect.\"\n\nFiled issue #277 with the full repro, location pointers, and a\nphased fix plan. Integration/EntityReaderIntegrationTests.cs stays\nas SQLite-only coverage in this PR. Phase 10 closed without a code\nchange beyond this session-log entry.\n\n* Convert RawSqlIntegrationTests to cross-dialect execution\n\nReplaces the SQLite-only RawSqlIntegrationTests.cs (17 tests) with\nCrossDialectRawSqlTests.cs (19 tests). Each test executes on all four\ncontexts (Lite / Pg / My / Ss) with per-dialect identifier quoting\n(`\"x\"` for SQLite/Pg, `` `x` `` for MySQL, `[x]` for SQL Server) but\nkeeps `@p0` placeholders on every dialect, matching how the\nRawSqlAsync runtime binds parameters (Npgsql rewrites `@name` to\npositional internally; MySqlConnector and SqlClient accept named\nparameters natively — see QuarryContext.cs:185 docstring).\n\nAlso kept the existing reflection-based NotSupportedException\nfallback test (single-dialect since it tests base-class behavior, not\ndialect-specific execution).\n\nPhase 11 of the cross-dialect test coverage plan.\n\n* Convert LoggingIntegrationTests to cross-dialect execution\n\nReplaces the SQLite-only LoggingIntegrationTests.cs (29 tests) with\nCrossDialectLoggingTests.cs. Each test runs sequentially on\nLite / Pg / My / Ss with `_logger.Clear()` between dialects;\nLogsmithOutput.Logger is a process-wide singleton so the fixture is\n[NonParallelizable].\n\nConnection-lifecycle tests (Opened, PreOpened, Disposed) build fresh\nper-dialect connections from each test container's\nGetConnectionStringAsync.\n\nSensitive-redaction tests (3) intentionally stay SQLite-only with\nexplicit per-test SqliteConnection setup — Pg/My/Ss baselines do not\nseed the widgets table, and the redaction code path runs in\nQuarryContext before SQL is built so single-dialect verification is\nsufficient. Documented in the class docstring.\n\nFixed one parameter type mismatch: Pg TIMESTAMP rejects string-typed\nCreatedAt with PG error 42804; switched to DateTime, which all four\nproviders accept.\n\nPhase 12 of the cross-dialect test coverage plan. Track B complete.\n\n* REMEDIATE: address review findings\n\nA-class fixes:\n- QRA503 now guards ToAsyncEnumerable terminal: added\n  InterceptorKind.ToAsyncEnumerable to IsExecutionSite so\n  Ss.Users().Offset(N).ToAsyncEnumerable() (without OrderBy) fails\n  compilation rather than producing the same parse-time-rejected\n  OFFSET/FETCH SQL the rule was promoted to prevent. Regression test\n  added.\n- Prepare_BatchInsert_4Dialect now actually executes:\n  added 4× ExecuteNonQueryAsync calls with row-count assertions so\n  the BatchInsert path is verified end-to-end on every dialect.\n- Split SuboptimalForDialectRule into two IQueryAnalysisRule\n  implementations to match the 1-rule-1-id pattern of QRA101–QRA501:\n  SuboptimalForDialectRule keeps QRA502 (MySQL RIGHT JOIN perf hint);\n  new UnsupportedForDialectRule emits QRA503 (MySQL FULL OUTER JOIN +\n  SqlServer OFFSET-without-ORDER-BY capability errors). Each rule's\n  Descriptor now matches the id it actually emits. Eight unit tests\n  updated to instantiate the new rule for QRA503 cases.\n\nB-class polish:\n- EntityReaderIntegrationTests.cs gets a remarks block linking #277\n  so a future contributor sees why this file isn't migrated.\n- Sensitive-redaction tests get per-test \"// SQLite-only — provider-\n  independent path\" comments.\n- Connection-lifecycle tests get a NOTE explaining the un-isolated\n  fresh-connection setup; future SELECT-only constraint documented.\n- Added RawSql_ParameterName_IsAlwaysAtPN_AcrossDialects to\n  CrossDialectLoggingTests pinning the @pN runtime convention across\n  all four dialects via the singleton recording logger (lives in the\n  NonParallelizable fixture deliberately).\n\nTests: 3353/3353 (Analyzers 128, Migration 201, Quarry 3024 — net +2\nfrom new regression tests).\n\n* Record PR #279 in workflow.md\n\n* chore: remove session artifacts before merge",
          "timestamp": "2026-04-27T05:34:31Z",
          "url": "https://github.com/Dtronix/Quarry/commit/f1968dc96b0577c88b979ad6600b1c9048a80fe0"
        },
        "date": 1777271249335,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18633.655144324668,
            "unit": "ns",
            "range": "± 91.47313098288899",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8240.801662738506,
            "unit": "ns",
            "range": "± 46.14558752889255",
            "allocated": 936
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18670.849959153395,
            "unit": "ns",
            "range": "± 75.52225930885834",
            "allocated": 960
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 185452.1259591239,
            "unit": "ns",
            "range": "± 1782.4042147023058",
            "allocated": 27152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 32499.198908487957,
            "unit": "ns",
            "range": "± 125.00336378017616",
            "allocated": 2568
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 54285.53657023112,
            "unit": "ns",
            "range": "± 164.81798725884346",
            "allocated": 1096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 86812.66670109675,
            "unit": "ns",
            "range": "± 780.8528746682169",
            "allocated": 8312
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 108754.68791707356,
            "unit": "ns",
            "range": "± 208.87036921434668",
            "allocated": 8752
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 110417.66625104632,
            "unit": "ns",
            "range": "± 949.3772389381173",
            "allocated": 8624
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 107133.75351388114,
            "unit": "ns",
            "range": "± 1018.0807996706891",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 46302.916666666664,
            "unit": "ns",
            "range": "± 173.58490630515576",
            "allocated": 552
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 50400,
            "unit": "ns",
            "range": "± 674.4884256706237",
            "allocated": 856
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 185661.51042829241,
            "unit": "ns",
            "range": "± 1455.2287849430354",
            "allocated": 27096
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16264.807424692008,
            "unit": "ns",
            "range": "± 95.03945133299754",
            "allocated": 1336
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 18257.182743617468,
            "unit": "ns",
            "range": "± 180.36346095992116",
            "allocated": 1664
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 80096.9421735491,
            "unit": "ns",
            "range": "± 674.3897608342809",
            "allocated": 9008
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 126036.5,
            "unit": "ns",
            "range": "± 4769.621636985475",
            "allocated": 15648
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 55046.71428571428,
            "unit": "ns",
            "range": "± 540.6637556774974",
            "allocated": 1592
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 136801.0424992488,
            "unit": "ns",
            "range": "± 855.5967613091118",
            "allocated": 14464
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 385348.17428152903,
            "unit": "ns",
            "range": "± 1671.4070946539166",
            "allocated": 47424
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 34811.868854229266,
            "unit": "ns",
            "range": "± 142.452089810755",
            "allocated": 3976
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 35049.23051570012,
            "unit": "ns",
            "range": "± 147.4225015946901",
            "allocated": 3984
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 195837.84878305288,
            "unit": "ns",
            "range": "± 982.5584106244022",
            "allocated": 29152
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 92048.4841026893,
            "unit": "ns",
            "range": "± 487.4258189850051",
            "allocated": 10400
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 90264.52304513114,
            "unit": "ns",
            "range": "± 730.3795886424604",
            "allocated": 9112
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 121742.14590219352,
            "unit": "ns",
            "range": "± 1006.4431143722676",
            "allocated": 9048
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 72741.69209507534,
            "unit": "ns",
            "range": "± 717.0542833797795",
            "allocated": 9832
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 33828.59190368652,
            "unit": "ns",
            "range": "± 172.58316570619513",
            "allocated": 2088
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 100245.84220668247,
            "unit": "ns",
            "range": "± 675.8900351383634",
            "allocated": 10360
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 481951.91376201925,
            "unit": "ns",
            "range": "± 2016.9040119822844",
            "allocated": 1120
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 324609.2706124442,
            "unit": "ns",
            "range": "± 1845.9385241817367",
            "allocated": 10472
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 417039.1271409255,
            "unit": "ns",
            "range": "± 2304.881168434422",
            "allocated": 8632
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 489803.22235576925,
            "unit": "ns",
            "range": "± 3099.921343161439",
            "allocated": 1128
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 18588635.95982143,
            "unit": "ns",
            "range": "± 149820.2328534674",
            "allocated": 1923210
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 39408.166666666664,
            "unit": "ns",
            "range": "± 801.4429633663345",
            "allocated": 576
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 44810.23880597015,
            "unit": "ns",
            "range": "± 2087.388662170064",
            "allocated": 880
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 359427.047921317,
            "unit": "ns",
            "range": "± 2654.974595696294",
            "allocated": 16016
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 214300.71807391828,
            "unit": "ns",
            "range": "± 1203.9076318370553",
            "allocated": 6440
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 195412.32825646034,
            "unit": "ns",
            "range": "± 1050.449120211239",
            "allocated": 6448
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 300897.9186823918,
            "unit": "ns",
            "range": "± 1412.6650911792067",
            "allocated": 16048
          }
        ]
      }
    ]
  }
}