window.BENCHMARK_DATA = {
  "lastUpdate": 1775878362519,
  "repoUrl": "https://github.com/Dtronix/Quarry",
  "entries": {
    "Quarry Benchmarks": [
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
          "id": "d3837764f711069dddf88e56db04be46d3b0c92d",
          "message": "Fix ADO.NET detector to use last CommandText before Execute (#248)\n\n* Fix FindCommandTextAssignment to use last assignment before Execute call\n\nWhen CommandText is reassigned multiple times, the detector previously\nreturned the first assignment instead of the last one before the\nExecute* call. Now collects all matching assignments and picks the one\nclosest to the Execute invocation using span comparison.\n\nCloses #244\n\n* Apply positional filtering to CollectParameterNames\n\nOnly collect parameters added between the CommandText assignment and\nthe Execute call. This prevents parameters from a previous command\nexecution from leaking into subsequent detections when the same\nDbCommand variable is reused.\n\n* chore: update workflow with PR number\n\n* chore: update workflow phase to FINALIZE\n\n* chore: remove session artifacts before merge",
          "timestamp": "2026-04-11T02:41:41Z",
          "url": "https://github.com/Dtronix/Quarry/commit/d3837764f711069dddf88e56db04be46d3b0c92d"
        },
        "date": 1775878362107,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Raw_Avg",
            "value": 18443.697185809797,
            "unit": "ns",
            "range": "± 141.1268933692326"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Dapper_Avg",
            "value": 18523.364096505302,
            "unit": "ns",
            "range": "± 106.68892075348057"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18530.53513277494,
            "unit": "ns",
            "range": "± 105.42248249714059"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.SqlKata_Avg",
            "value": 35473.16084172176,
            "unit": "ns",
            "range": "± 238.97297151035815"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.EfCore_Avg",
            "value": 152788.98358623797,
            "unit": "ns",
            "range": "± 1264.1428198502915"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8339.71658870152,
            "unit": "ns",
            "range": "± 70.38935294221932"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Dapper_Count",
            "value": 8382.472321730394,
            "unit": "ns",
            "range": "± 37.76466358721068"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Raw_Count",
            "value": 8534.578350612095,
            "unit": "ns",
            "range": "± 77.30447014018748"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.SqlKata_Count",
            "value": 23603.131604875838,
            "unit": "ns",
            "range": "± 199.9075283755714"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.EfCore_Count",
            "value": 37563.88497220553,
            "unit": "ns",
            "range": "± 605.1191521514"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18039.370936075848,
            "unit": "ns",
            "range": "± 55.7748149928802"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Dapper_Sum",
            "value": 18436.05049387614,
            "unit": "ns",
            "range": "± 53.524516355056"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Raw_Sum",
            "value": 18494.491930280412,
            "unit": "ns",
            "range": "± 143.8160836042438"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.SqlKata_Sum",
            "value": 36069.12439903846,
            "unit": "ns",
            "range": "± 300.49035032048846"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.EfCore_Sum",
            "value": 159221.1112905649,
            "unit": "ns",
            "range": "± 1326.0433837481276"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Raw_ColdStart",
            "value": 185150.26772054037,
            "unit": "ns",
            "range": "± 691.4648436722664"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 196574.87241908483,
            "unit": "ns",
            "range": "± 786.133582856079"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.SqlKata_ColdStart",
            "value": 217917.15412454045,
            "unit": "ns",
            "range": "± 4292.560577189394"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Dapper_ColdStart",
            "value": 224689.72275015025,
            "unit": "ns",
            "range": "± 608.5583578224008"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.EfCore_ColdStart",
            "value": 411149.937028556,
            "unit": "ns",
            "range": "± 11618.778783335092"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Dapper_JoinFilterPaginate",
            "value": 30562.20583016532,
            "unit": "ns",
            "range": "± 144.6779103581804"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Raw_JoinFilterPaginate",
            "value": 32044.08814415565,
            "unit": "ns",
            "range": "± 152.8080430527407"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 34681.256631033764,
            "unit": "ns",
            "range": "± 416.680045203989"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.SqlKata_JoinFilterPaginate",
            "value": 85623.53065321181,
            "unit": "ns",
            "range": "± 1765.6979944372476"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.EfCore_JoinFilterPaginate",
            "value": 128035.17620442709,
            "unit": "ns",
            "range": "± 1846.9077521546074"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Raw_MultiJoinAggregate",
            "value": 51915.532541128305,
            "unit": "ns",
            "range": "± 275.9806042349718"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Dapper_MultiJoinAggregate",
            "value": 52910.4441011869,
            "unit": "ns",
            "range": "± 258.4567320641226"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 53033.148639385516,
            "unit": "ns",
            "range": "± 201.14735694913648"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.SqlKata_MultiJoinAggregate",
            "value": 88657.36604817708,
            "unit": "ns",
            "range": "± 1508.8169292334433"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.EfCore_MultiJoinAggregate",
            "value": 132562.96815708705,
            "unit": "ns",
            "range": "± 1494.9388511834743"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Raw_ConditionalQuery",
            "value": 84809.72611177884,
            "unit": "ns",
            "range": "± 631.8714137358979"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 88502.91770582933,
            "unit": "ns",
            "range": "± 380.41819208360835"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Dapper_ConditionalQuery",
            "value": 102188.40607158955,
            "unit": "ns",
            "range": "± 578.3990272091124"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.SqlKata_ConditionalQuery",
            "value": 132392.08517020088,
            "unit": "ns",
            "range": "± 2059.471028385178"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.EfCore_ConditionalQuery",
            "value": 173360.2263671875,
            "unit": "ns",
            "range": "± 3234.1640120798443"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Dapper_MultiCte",
            "value": 87066.38388296273,
            "unit": "ns",
            "range": "± 326.1184614741263"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Raw_MultiCte",
            "value": 106205.33137394831,
            "unit": "ns",
            "range": "± 394.26155260820514"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.SqlKata_MultiCte",
            "value": 106286.53616098258,
            "unit": "ns",
            "range": "± 614.013391367286"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 114332.16690767728,
            "unit": "ns",
            "range": "± 345.06582807802386"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.EfCore_MultiCte",
            "value": 165064.77205403647,
            "unit": "ns",
            "range": "± 1113.2181298039354"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Dapper_CteProjection",
            "value": 83348.66192626953,
            "unit": "ns",
            "range": "± 665.3521978124916"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.SqlKata_CteProjection",
            "value": 102550.17544119699,
            "unit": "ns",
            "range": "± 880.8385215366525"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Raw_CteProjection",
            "value": 103412.70001690205,
            "unit": "ns",
            "range": "± 718.2911153163803"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 111548.34680175781,
            "unit": "ns",
            "range": "± 683.9178234906658"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.EfCore_CteProjection",
            "value": 160717.32361778847,
            "unit": "ns",
            "range": "± 2448.4496244747315"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Dapper_SimpleCte",
            "value": 84776.22104116586,
            "unit": "ns",
            "range": "± 177.99232035546675"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.SqlKata_SimpleCte",
            "value": 106924.97519155648,
            "unit": "ns",
            "range": "± 357.5076094707649"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Raw_SimpleCte",
            "value": 110410.5041034405,
            "unit": "ns",
            "range": "± 180.41250700201212"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 110553.67965932992,
            "unit": "ns",
            "range": "± 302.4381576172822"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.EfCore_SimpleCte",
            "value": 161035.99969951922,
            "unit": "ns",
            "range": "± 2257.0900825080244"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 44384.53846153846,
            "unit": "ns",
            "range": "± 527.4483569324766"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Raw_DeleteSingleRow",
            "value": 46380.230769230766,
            "unit": "ns",
            "range": "± 558.1948814177945"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 47928.5,
            "unit": "ns",
            "range": "± 458.4783131581729"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Dapper_DeleteSingleRow",
            "value": 54651.96153846154,
            "unit": "ns",
            "range": "± 825.756583926181"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.SqlKata_DeleteSingleRow",
            "value": 118735.59183673469,
            "unit": "ns",
            "range": "± 15991.97795148422"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.EfCore_DeleteSingleRow",
            "value": 930981.1546391753,
            "unit": "ns",
            "range": "± 192410.13530094488"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.EnumerableOverheadBenchmarks.Buffered_Direct",
            "value": 193501.85133579798,
            "unit": "ns",
            "range": "± 1190.6549999443089"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.EnumerableOverheadBenchmarks.AsyncEnumerable_AwaitForeach",
            "value": 197904.75368088944,
            "unit": "ns",
            "range": "± 1071.4269862750268"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.EnumerableOverheadBenchmarks.AsyncEnumerable_ToListAsync",
            "value": 201374.95265415736,
            "unit": "ns",
            "range": "± 1339.2597312787786"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Raw_WhereActive",
            "value": 182089.7348069411,
            "unit": "ns",
            "range": "± 675.8208302226325"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 192612.69489933894,
            "unit": "ns",
            "range": "± 451.11550712512934"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.SqlKata_WhereActive",
            "value": 221281.80833333332,
            "unit": "ns",
            "range": "± 3085.062080726921"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Dapper_WhereActive",
            "value": 226969.96071079798,
            "unit": "ns",
            "range": "± 1018.7819735584455"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.EfCore_WhereActive",
            "value": 266710.20733173075,
            "unit": "ns",
            "range": "± 3258.2738570647834"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16379.133535531852,
            "unit": "ns",
            "range": "± 141.50080038247552"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Raw_WhereById",
            "value": 17009.2850787823,
            "unit": "ns",
            "range": "± 88.38976211364951"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17525.425130990836,
            "unit": "ns",
            "range": "± 146.8085100894903"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Dapper_WhereById",
            "value": 23341.206372942244,
            "unit": "ns",
            "range": "± 206.57423298233655"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.SqlKata_WhereById",
            "value": 45711.81306966146,
            "unit": "ns",
            "range": "± 275.8662720399304"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.EfCore_WhereById",
            "value": 63647.214224008414,
            "unit": "ns",
            "range": "± 617.88409526869"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Raw_WhereCompound",
            "value": 78171.05773925781,
            "unit": "ns",
            "range": "± 373.16763933168244"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 83459.7779976981,
            "unit": "ns",
            "range": "± 569.5327222357637"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.SqlKata_WhereCompound",
            "value": 98629.09594726562,
            "unit": "ns",
            "range": "± 783.3661772521004"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Dapper_WhereCompound",
            "value": 109868.69533865793,
            "unit": "ns",
            "range": "± 576.5586291111167"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.EfCore_WhereCompound",
            "value": 156113.52005709134,
            "unit": "ns",
            "range": "± 1487.6473674060974"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Raw_BatchInsert10",
            "value": 111854.16666666667,
            "unit": "ns",
            "range": "± 5365.080950726013"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 122211.91666666667,
            "unit": "ns",
            "range": "± 1556.463208590865"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Dapper_BatchInsert10",
            "value": 241660.23684210525,
            "unit": "ns",
            "range": "± 5087.119877604891"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.SqlKata_BatchInsert10",
            "value": 245914.73,
            "unit": "ns",
            "range": "± 44774.6522521404"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.EfCore_BatchInsert10",
            "value": 2855132.4285714286,
            "unit": "ns",
            "range": "± 45111.41395515072"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Raw_SingleInsert",
            "value": 50068.833333333336,
            "unit": "ns",
            "range": "± 438.51699113620623"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 53414,
            "unit": "ns",
            "range": "± 574.1703896611496"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Dapper_SingleInsert",
            "value": 61937.730769230766,
            "unit": "ns",
            "range": "± 485.6248816123672"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.SqlKata_SingleInsert",
            "value": 115957.57,
            "unit": "ns",
            "range": "± 16048.765233509494"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.EfCore_SingleInsert",
            "value": 930131.5384615385,
            "unit": "ns",
            "range": "± 24953.44555203673"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Dapper_InnerJoin",
            "value": 111978.10215541294,
            "unit": "ns",
            "range": "± 692.549147338808"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Raw_InnerJoin",
            "value": 134845.11183384486,
            "unit": "ns",
            "range": "± 909.1349818930748"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 143507.45096261162,
            "unit": "ns",
            "range": "± 1057.426067881319"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.SqlKata_InnerJoin",
            "value": 166951.6874624399,
            "unit": "ns",
            "range": "± 1707.210371996088"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.EfCore_InnerJoin",
            "value": 217628.1805889423,
            "unit": "ns",
            "range": "± 2215.3935456172385"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Dapper_ThreeTableJoin",
            "value": 342160.33736746653,
            "unit": "ns",
            "range": "± 2513.222898336118"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Raw_ThreeTableJoin",
            "value": 383440.8305288461,
            "unit": "ns",
            "range": "± 1718.6453976209768"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 399282.93982872594,
            "unit": "ns",
            "range": "± 1016.1467440931191"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.SqlKata_ThreeTableJoin",
            "value": 449265.33173076925,
            "unit": "ns",
            "range": "± 7346.762189777259"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.EfCore_ThreeTableJoin",
            "value": 522133.8699776786,
            "unit": "ns",
            "range": "± 7203.1793724704885"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Raw_FirstPage",
            "value": 33065.15321350098,
            "unit": "ns",
            "range": "± 123.71992141260134"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 35429.8985548753,
            "unit": "ns",
            "range": "± 223.46383465570008"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Dapper_FirstPage",
            "value": 41980.80667114258,
            "unit": "ns",
            "range": "± 273.79155422982114"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.SqlKata_FirstPage",
            "value": 70211.75202287946,
            "unit": "ns",
            "range": "± 482.6051045791429"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.EfCore_FirstPage",
            "value": 93833.5769391741,
            "unit": "ns",
            "range": "± 1435.497866631648"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Raw_LimitOffset",
            "value": 33950.59364100865,
            "unit": "ns",
            "range": "± 271.4478597161121"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 37469.353257399336,
            "unit": "ns",
            "range": "± 321.52339570116334"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Dapper_LimitOffset",
            "value": 43670.070220947266,
            "unit": "ns",
            "range": "± 319.0624208987193"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.SqlKata_LimitOffset",
            "value": 75505.36220703126,
            "unit": "ns",
            "range": "± 1720.1309851628341"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.EfCore_LimitOffset",
            "value": 100118.7763296274,
            "unit": "ns",
            "range": "± 1074.5515632036302"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Raw_SelectAll",
            "value": 192573.44048602766,
            "unit": "ns",
            "range": "± 755.0013278330114"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 203791.1022198017,
            "unit": "ns",
            "range": "± 826.106893017586"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.SqlKata_SelectAll",
            "value": 213701.50219726562,
            "unit": "ns",
            "range": "± 1547.4107329386104"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Dapper_SelectAll",
            "value": 244448.82123674665,
            "unit": "ns",
            "range": "± 2395.6474289964412"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.EfCore_SelectAll",
            "value": 264627.81266276044,
            "unit": "ns",
            "range": "± 5427.1161381583415"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Raw_SelectProjection",
            "value": 85243.61703725961,
            "unit": "ns",
            "range": "± 212.69097164444185"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 93708.58551897321,
            "unit": "ns",
            "range": "± 1135.9115036237679"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.SqlKata_SelectProjection",
            "value": 109438.6404157366,
            "unit": "ns",
            "range": "± 1700.164749973046"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Dapper_SelectProjection",
            "value": 117110.66783796038,
            "unit": "ns",
            "range": "± 599.9501463067667"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.EfCore_SelectProjection",
            "value": 153692.2889873798,
            "unit": "ns",
            "range": "± 2369.8109258296263"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Raw_Except",
            "value": 90941.58636005108,
            "unit": "ns",
            "range": "± 364.80590025355974"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 93248.41029710036,
            "unit": "ns",
            "range": "± 293.40691943091696"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Dapper_Except",
            "value": 111033.46359688895,
            "unit": "ns",
            "range": "± 658.2589677899151"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.SqlKata_Except",
            "value": 128911.13893479567,
            "unit": "ns",
            "range": "± 769.2421648254577"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.EfCore_Except",
            "value": 193095.93951822916,
            "unit": "ns",
            "range": "± 3431.644898610187"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Raw_Intersect",
            "value": 119156.20988581731,
            "unit": "ns",
            "range": "± 657.2609401330485"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 123786.63531024639,
            "unit": "ns",
            "range": "± 525.6021752832697"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Dapper_Intersect",
            "value": 139402.46589006696,
            "unit": "ns",
            "range": "± 1152.2448429516483"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.SqlKata_Intersect",
            "value": 151194.58081054688,
            "unit": "ns",
            "range": "± 1465.4698855146323"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.EfCore_Intersect",
            "value": 224157.65352957588,
            "unit": "ns",
            "range": "± 3253.5249096657053"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Raw_UnionAll",
            "value": 75276.85940317008,
            "unit": "ns",
            "range": "± 526.3540854406318"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 79176.5257474459,
            "unit": "ns",
            "range": "± 508.90058500442086"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Dapper_UnionAll",
            "value": 97094.53965541294,
            "unit": "ns",
            "range": "± 387.8950300713375"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.SqlKata_UnionAll",
            "value": 112258.43171037946,
            "unit": "ns",
            "range": "± 1146.360436333924"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.EfCore_UnionAll",
            "value": 172832.19759114584,
            "unit": "ns",
            "range": "± 1334.9534110476473"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Raw_Contains",
            "value": 33235.47137451172,
            "unit": "ns",
            "range": "± 77.14657638247844"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 35072.57734462193,
            "unit": "ns",
            "range": "± 386.1185541686235"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Dapper_Contains",
            "value": 39639.77579171317,
            "unit": "ns",
            "range": "± 326.347985199303"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.SqlKata_Contains",
            "value": 86141.1257672991,
            "unit": "ns",
            "range": "± 991.4109606742868"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.EfCore_Contains",
            "value": 99405.6440633138,
            "unit": "ns",
            "range": "± 2583.3532825174475"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Raw_StartsWith",
            "value": 99657.32414027622,
            "unit": "ns",
            "range": "± 538.3980146118179"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 103623.58032226562,
            "unit": "ns",
            "range": "± 619.2073797961249"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Dapper_StartsWith",
            "value": 131304.50497671275,
            "unit": "ns",
            "range": "± 578.5139731132706"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.SqlKata_StartsWith",
            "value": 158520.42991286056,
            "unit": "ns",
            "range": "± 1229.1200635029545"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.EfCore_StartsWith",
            "value": 180309.0068359375,
            "unit": "ns",
            "range": "± 1428.1962497991767"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 484872.19576590403,
            "unit": "ns",
            "range": "± 2319.3128647976264"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Dapper_CountSubquery",
            "value": 485507.9630784255,
            "unit": "ns",
            "range": "± 1620.2140219153127"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Raw_CountSubquery",
            "value": 485918.5997488839,
            "unit": "ns",
            "range": "± 3780.3407190181765"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.SqlKata_CountSubquery",
            "value": 534153.8342633928,
            "unit": "ns",
            "range": "± 4003.5131710610385"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.EfCore_CountSubquery",
            "value": 549345.4557942708,
            "unit": "ns",
            "range": "± 9498.501203949132"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Raw_Exists",
            "value": 320569.74918619794,
            "unit": "ns",
            "range": "± 1396.8794447487503"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 332018.2922551082,
            "unit": "ns",
            "range": "± 1707.7487028226037"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Dapper_Exists",
            "value": 341142.56291852676,
            "unit": "ns",
            "range": "± 1678.5631688069122"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.SqlKata_Exists",
            "value": 382510.30106026784,
            "unit": "ns",
            "range": "± 3753.022698434771"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.EfCore_Exists",
            "value": 401699.6140485491,
            "unit": "ns",
            "range": "± 4099.993257720714"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Raw_FilteredExists",
            "value": 406771.239445613,
            "unit": "ns",
            "range": "± 1178.7552092717474"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 418028.1891902043,
            "unit": "ns",
            "range": "± 1322.0841152325347"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Dapper_FilteredExists",
            "value": 424321.068359375,
            "unit": "ns",
            "range": "± 2317.8508645323755"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.SqlKata_FilteredExists",
            "value": 477424.00848858175,
            "unit": "ns",
            "range": "± 1840.5125189865716"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.EfCore_FilteredExists",
            "value": 741996.0906808035,
            "unit": "ns",
            "range": "± 11594.485489389872"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Raw_SumSubquery",
            "value": 488808.7284458705,
            "unit": "ns",
            "range": "± 3543.584852431089"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 489860.28348214284,
            "unit": "ns",
            "range": "± 3331.2992055943696"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Dapper_SumSubquery",
            "value": 491465.79529747594,
            "unit": "ns",
            "range": "± 3349.1417011115973"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.SqlKata_SumSubquery",
            "value": 541618.7749023438,
            "unit": "ns",
            "range": "± 4346.264858062835"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.EfCore_SumSubquery",
            "value": 923700.220703125,
            "unit": "ns",
            "range": "± 7129.736589163691"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Raw_Throughput",
            "value": 16876593.265625,
            "unit": "ns",
            "range": "± 96492.26277820702"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 19284063.78794643,
            "unit": "ns",
            "range": "± 90462.90125218523"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Dapper_Throughput",
            "value": 22828948.339285713,
            "unit": "ns",
            "range": "± 168248.96070206704"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.SqlKata_Throughput",
            "value": 46085358.1142857,
            "unit": "ns",
            "range": "± 1476560.2333830795"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.EfCore_Throughput",
            "value": 76801348.16000001,
            "unit": "ns",
            "range": "± 2023107.3953713973"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 39838.07692307692,
            "unit": "ns",
            "range": "± 271.95019811798306"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Raw_UpdateSingleRow",
            "value": 43217.583333333336,
            "unit": "ns",
            "range": "± 635.3948605299533"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 43529.230769230766,
            "unit": "ns",
            "range": "± 609.4343215701691"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Dapper_UpdateSingleRow",
            "value": 56011.114583333336,
            "unit": "ns",
            "range": "± 6582.4603061066255"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.SqlKata_UpdateSingleRow",
            "value": 127173.82105263158,
            "unit": "ns",
            "range": "± 15940.791880126577"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.EfCore_UpdateSingleRow",
            "value": 1025796.6958762887,
            "unit": "ns",
            "range": "± 157525.73528796277"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Dapper_Lag",
            "value": 262118.16566685267,
            "unit": "ns",
            "range": "± 1802.4070103798003"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Raw_Lag",
            "value": 361046.8767496745,
            "unit": "ns",
            "range": "± 1401.5304559072554"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 388314.81392996653,
            "unit": "ns",
            "range": "± 2834.9497835073944"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.SqlKata_Lag",
            "value": 409701.59990985575,
            "unit": "ns",
            "range": "± 6425.375694329576"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.EfCore_Lag",
            "value": 440599.61279296875,
            "unit": "ns",
            "range": "± 8068.640063347221"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Raw_Rank",
            "value": 212237.7985088642,
            "unit": "ns",
            "range": "± 783.4925433796141"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 222680.13701923078,
            "unit": "ns",
            "range": "± 781.7888275193245"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Dapper_Rank",
            "value": 240171.17853655134,
            "unit": "ns",
            "range": "± 997.9562251919775"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.SqlKata_Rank",
            "value": 258483.52524038462,
            "unit": "ns",
            "range": "± 1545.1820781416964"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.EfCore_Rank",
            "value": 289815.3231026786,
            "unit": "ns",
            "range": "± 4321.952090130329"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Raw_RowNumber",
            "value": 194108.41819254556,
            "unit": "ns",
            "range": "± 409.60908419641504"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 206594.53846153847,
            "unit": "ns",
            "range": "± 612.1121900946018"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Dapper_RowNumber",
            "value": 227902.11603655134,
            "unit": "ns",
            "range": "± 1951.3469031897118"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.SqlKata_RowNumber",
            "value": 239850.29830228366,
            "unit": "ns",
            "range": "± 1662.546827057137"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.EfCore_RowNumber",
            "value": 276314.4268973214,
            "unit": "ns",
            "range": "± 2911.0011517246435"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Dapper_RunningSum",
            "value": 218447.38122558594,
            "unit": "ns",
            "range": "± 1397.263894312171"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Raw_RunningSum",
            "value": 294487.51981026784,
            "unit": "ns",
            "range": "± 2242.553722834433"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 312132.7145996094,
            "unit": "ns",
            "range": "± 2143.539329720119"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.SqlKata_RunningSum",
            "value": 346535.0646033654,
            "unit": "ns",
            "range": "± 3587.066828914795"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.EfCore_RunningSum",
            "value": 383148.7373046875,
            "unit": "ns",
            "range": "± 4976.700259174579"
          }
        ]
      }
    ]
  }
}