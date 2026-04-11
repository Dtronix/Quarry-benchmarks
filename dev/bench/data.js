window.BENCHMARK_DATA = {
  "lastUpdate": 1775942773923,
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
      }
    ]
  }
}