window.BENCHMARK_DATA = {
  "lastUpdate": 1775920461712,
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
          "id": "fea9c3c2894b730f2fe07a4ca398b338aa715255",
          "message": "Add code fix tests for EF Core, ADO.NET, SqlKata, and Dapper converters (#245) (#251)\n\n* Add EfCoreMigrationCodeFixTests\n\nTests: FixableDiagnosticIds, FixAllProvider, basic replacement,\nawait preservation, using directive insertion, QRM013 rejection.\n\n* Add AdoNetMigrationCodeFixTests\n\nTests: FixableDiagnosticIds, FixAllProvider, basic replacement,\nTODO comment insertion, using directive insertion, QRM023 rejection.\n\n* Add SqlKataMigrationCodeFixTests\n\nTests: FixableDiagnosticIds, FixAllProvider, basic replacement,\nusing directive insertion, QRM033 rejection.\n\n* Add DapperMigrationCodeFixTests\n\nTests: FixableDiagnosticIds, FixAllProvider, basic replacement,\nawait preservation, using directive insertion, QRM003 rejection.\n\n* Add warning-tier (0x2) code fix tests for EfCore, AdoNet, and Dapper\n\nCovers QRM012 (AsNoTracking), QRM022 (DELETE without WHERE),\nQRM002 (DELETE without WHERE) — verifies code fix applies even\nwhen conversion has warnings.\n\n* Update review classifications and workflow state\n\n* Update workflow with PR number and session log\n\n* Update workflow phase to FINALIZE\n\n* chore: remove session artifacts before merge",
          "timestamp": "2026-04-11T02:59:35Z",
          "url": "https://github.com/Dtronix/Quarry/commit/fea9c3c2894b730f2fe07a4ca398b338aa715255"
        },
        "date": 1775881331697,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Raw_Avg",
            "value": 17599.28364998954,
            "unit": "ns",
            "range": "± 260.2701868090105"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Dapper_Avg",
            "value": 18665.49927344689,
            "unit": "ns",
            "range": "± 83.3509418262802"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18665.831970214844,
            "unit": "ns",
            "range": "± 169.11764103447436"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.SqlKata_Avg",
            "value": 36153.14055524553,
            "unit": "ns",
            "range": "± 511.3854385665724"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.EfCore_Avg",
            "value": 145859.15658804087,
            "unit": "ns",
            "range": "± 1269.3867042849365"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8268.588829040527,
            "unit": "ns",
            "range": "± 25.407693461626312"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Dapper_Count",
            "value": 8379.154398991512,
            "unit": "ns",
            "range": "± 59.618774332560136"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Raw_Count",
            "value": 8615.97784096854,
            "unit": "ns",
            "range": "± 64.92422882335956"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.SqlKata_Count",
            "value": 23795.691497802734,
            "unit": "ns",
            "range": "± 195.0356747102744"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.EfCore_Count",
            "value": 36024.81074015299,
            "unit": "ns",
            "range": "± 105.42722455402146"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Raw_Sum",
            "value": 17632.954175313313,
            "unit": "ns",
            "range": "± 77.66610094328105"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 17938.233053354117,
            "unit": "ns",
            "range": "± 167.45844293824578"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Dapper_Sum",
            "value": 18767.086975097656,
            "unit": "ns",
            "range": "± 180.567204160679"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.SqlKata_Sum",
            "value": 36150.86914934431,
            "unit": "ns",
            "range": "± 405.58980479669964"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.EfCore_Sum",
            "value": 192360.00221354168,
            "unit": "ns",
            "range": "± 3336.4521635405076"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Raw_ColdStart",
            "value": 181775.3772723858,
            "unit": "ns",
            "range": "± 1039.717020575592"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 194567.22220552884,
            "unit": "ns",
            "range": "± 1032.5484612207201"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.SqlKata_ColdStart",
            "value": 214125.7583705357,
            "unit": "ns",
            "range": "± 2475.1078271857273"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Dapper_ColdStart",
            "value": 227033.5018310547,
            "unit": "ns",
            "range": "± 503.4353018351263"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.EfCore_ColdStart",
            "value": 415249.0564959491,
            "unit": "ns",
            "range": "± 11292.682660823973"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Dapper_JoinFilterPaginate",
            "value": 30687.946071079798,
            "unit": "ns",
            "range": "± 202.3484621011364"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Raw_JoinFilterPaginate",
            "value": 31836.39878023588,
            "unit": "ns",
            "range": "± 205.98246477877944"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 34454.720720563615,
            "unit": "ns",
            "range": "± 332.69534518293295"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.SqlKata_JoinFilterPaginate",
            "value": 84779.90910993304,
            "unit": "ns",
            "range": "± 1497.782848964361"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.EfCore_JoinFilterPaginate",
            "value": 130261.1455078125,
            "unit": "ns",
            "range": "± 903.0285184784517"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Raw_MultiJoinAggregate",
            "value": 53062.46601359049,
            "unit": "ns",
            "range": "± 181.15236840137564"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 53249.290226862984,
            "unit": "ns",
            "range": "± 327.3504316896733"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Dapper_MultiJoinAggregate",
            "value": 53510.5963275616,
            "unit": "ns",
            "range": "± 232.1264512758828"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.SqlKata_MultiJoinAggregate",
            "value": 86775.82406850961,
            "unit": "ns",
            "range": "± 606.1313594248177"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.EfCore_MultiJoinAggregate",
            "value": 133698.26384626116,
            "unit": "ns",
            "range": "± 1760.2383841203618"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Raw_ConditionalQuery",
            "value": 84621.4836669922,
            "unit": "ns",
            "range": "± 1310.7472108630586"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 88485.1228121244,
            "unit": "ns",
            "range": "± 500.007505852761"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Dapper_ConditionalQuery",
            "value": 101529.09014892578,
            "unit": "ns",
            "range": "± 451.18176606965204"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.SqlKata_ConditionalQuery",
            "value": 132489.382359096,
            "unit": "ns",
            "range": "± 2289.130099381871"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.EfCore_ConditionalQuery",
            "value": 174082.9444110577,
            "unit": "ns",
            "range": "± 2021.4891711769285"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Dapper_MultiCte",
            "value": 86534.71919133113,
            "unit": "ns",
            "range": "± 594.4818688414407"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Raw_MultiCte",
            "value": 108118.78057391827,
            "unit": "ns",
            "range": "± 683.8811451348566"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.SqlKata_MultiCte",
            "value": 109475.64320591518,
            "unit": "ns",
            "range": "± 819.7906822585949"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 113262.00274188702,
            "unit": "ns",
            "range": "± 632.4033462468844"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.EfCore_MultiCte",
            "value": 167620.48161764705,
            "unit": "ns",
            "range": "± 3344.771023694287"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Dapper_CteProjection",
            "value": 82341.93205769856,
            "unit": "ns",
            "range": "± 205.71162168518987"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Raw_CteProjection",
            "value": 105401.1223801833,
            "unit": "ns",
            "range": "± 556.5355578571633"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 106350.15755789621,
            "unit": "ns",
            "range": "± 909.1201975165601"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.SqlKata_CteProjection",
            "value": 109891.00776554988,
            "unit": "ns",
            "range": "± 421.3521865797146"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.EfCore_CteProjection",
            "value": 158887.28006417412,
            "unit": "ns",
            "range": "± 2700.903012219583"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Dapper_SimpleCte",
            "value": 85323.98846905048,
            "unit": "ns",
            "range": "± 199.4561102889489"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.SqlKata_SimpleCte",
            "value": 106794.80911020133,
            "unit": "ns",
            "range": "± 651.4163108113432"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 109993.05511005108,
            "unit": "ns",
            "range": "± 699.6583968636204"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Raw_SimpleCte",
            "value": 110477.44004469652,
            "unit": "ns",
            "range": "± 612.7602115343108"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.EfCore_SimpleCte",
            "value": 164588.0454676011,
            "unit": "ns",
            "range": "± 5002.700376697283"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 44197.8,
            "unit": "ns",
            "range": "± 976.9164485095033"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Raw_DeleteSingleRow",
            "value": 46252.333333333336,
            "unit": "ns",
            "range": "± 302.03381307798014"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 47848.730769230766,
            "unit": "ns",
            "range": "± 614.0330004495081"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Dapper_DeleteSingleRow",
            "value": 57999.085106382976,
            "unit": "ns",
            "range": "± 6760.86535095577"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.SqlKata_DeleteSingleRow",
            "value": 114623.27083333333,
            "unit": "ns",
            "range": "± 15693.444128699535"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.EfCore_DeleteSingleRow",
            "value": 897417.847368421,
            "unit": "ns",
            "range": "± 177772.11506210602"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.EnumerableOverheadBenchmarks.AsyncEnumerable_AwaitForeach",
            "value": 199549.49825846354,
            "unit": "ns",
            "range": "± 2690.51942445248"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.EnumerableOverheadBenchmarks.AsyncEnumerable_ToListAsync",
            "value": 200669.83396559494,
            "unit": "ns",
            "range": "± 1057.1245618622675"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.EnumerableOverheadBenchmarks.Buffered_Direct",
            "value": 207891.51243373327,
            "unit": "ns",
            "range": "± 1403.278113862092"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Raw_WhereActive",
            "value": 180528.94006347656,
            "unit": "ns",
            "range": "± 590.0973216358954"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 188399.10831705728,
            "unit": "ns",
            "range": "± 417.7050236289577"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.SqlKata_WhereActive",
            "value": 205569.29319411056,
            "unit": "ns",
            "range": "± 1649.438702541819"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Dapper_WhereActive",
            "value": 222841.21897670202,
            "unit": "ns",
            "range": "± 1252.0435796154675"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.EfCore_WhereActive",
            "value": 270433.7421875,
            "unit": "ns",
            "range": "± 1623.4720627566985"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 16227.190561147836,
            "unit": "ns",
            "range": "± 114.92421512492082"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Raw_WhereById",
            "value": 16748.52466256278,
            "unit": "ns",
            "range": "± 126.58454921234625"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17473.48599243164,
            "unit": "ns",
            "range": "± 243.81810207308735"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Dapper_WhereById",
            "value": 22378.284539358956,
            "unit": "ns",
            "range": "± 133.07620168221885"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.SqlKata_WhereById",
            "value": 45508.84380634014,
            "unit": "ns",
            "range": "± 412.2347089158751"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.EfCore_WhereById",
            "value": 62911.82946777344,
            "unit": "ns",
            "range": "± 834.1177993908796"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Raw_WhereCompound",
            "value": 78988.0924166166,
            "unit": "ns",
            "range": "± 560.8812579385799"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 84050.88452148438,
            "unit": "ns",
            "range": "± 549.6013550567504"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.SqlKata_WhereCompound",
            "value": 103632.83447265625,
            "unit": "ns",
            "range": "± 1342.027407643796"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Dapper_WhereCompound",
            "value": 109985.4445539202,
            "unit": "ns",
            "range": "± 761.572158705081"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.EfCore_WhereCompound",
            "value": 158822.62376644736,
            "unit": "ns",
            "range": "± 3455.7324363437197"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Raw_BatchInsert10",
            "value": 110357,
            "unit": "ns",
            "range": "± 984.4368025332141"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 120645.80769230769,
            "unit": "ns",
            "range": "± 1146.7249295722859"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.SqlKata_BatchInsert10",
            "value": 207297.35294117648,
            "unit": "ns",
            "range": "± 6695.253528511948"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Dapper_BatchInsert10",
            "value": 241498.94736842104,
            "unit": "ns",
            "range": "± 5177.175597151664"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.EfCore_BatchInsert10",
            "value": 3479701.5061728396,
            "unit": "ns",
            "range": "± 330787.120149845"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Raw_SingleInsert",
            "value": 48870.833333333336,
            "unit": "ns",
            "range": "± 503.48311036641775"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 52084.666666666664,
            "unit": "ns",
            "range": "± 647.5940554128493"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Dapper_SingleInsert",
            "value": 62313.769230769234,
            "unit": "ns",
            "range": "± 433.52511535207003"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.SqlKata_SingleInsert",
            "value": 102514.3125,
            "unit": "ns",
            "range": "± 1239.547456063435"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.EfCore_SingleInsert",
            "value": 1118384.8854166667,
            "unit": "ns",
            "range": "± 232483.13292193308"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Dapper_InnerJoin",
            "value": 110884.59545898438,
            "unit": "ns",
            "range": "± 1070.2971786589733"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Raw_InnerJoin",
            "value": 134590.17270132212,
            "unit": "ns",
            "range": "± 933.9922063838249"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 144832.67578125,
            "unit": "ns",
            "range": "± 973.2940664357735"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.SqlKata_InnerJoin",
            "value": 160714.74917367788,
            "unit": "ns",
            "range": "± 819.6399441137278"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.EfCore_InnerJoin",
            "value": 216645.25127704328,
            "unit": "ns",
            "range": "± 1919.562599811363"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Dapper_ThreeTableJoin",
            "value": 349855.2381417411,
            "unit": "ns",
            "range": "± 1079.923594387273"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Raw_ThreeTableJoin",
            "value": 384027.1716120793,
            "unit": "ns",
            "range": "± 1638.4446415871182"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 401384.7706473214,
            "unit": "ns",
            "range": "± 1646.9209430436524"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.SqlKata_ThreeTableJoin",
            "value": 428399.8787667411,
            "unit": "ns",
            "range": "± 5466.311829157377"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.EfCore_ThreeTableJoin",
            "value": 531873.0335036058,
            "unit": "ns",
            "range": "± 3829.0258774358126"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Raw_FirstPage",
            "value": 33062.18978647085,
            "unit": "ns",
            "range": "± 143.05492649037404"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 36258.33828500601,
            "unit": "ns",
            "range": "± 214.75479674497066"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Dapper_FirstPage",
            "value": 42490.93198067801,
            "unit": "ns",
            "range": "± 212.84952001062447"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.SqlKata_FirstPage",
            "value": 72912.8213266226,
            "unit": "ns",
            "range": "± 336.50263179320723"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.EfCore_FirstPage",
            "value": 92416.61440805289,
            "unit": "ns",
            "range": "± 1037.2624890504158"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Raw_LimitOffset",
            "value": 33966.14823913574,
            "unit": "ns",
            "range": "± 81.60717572734438"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 36232.147916353664,
            "unit": "ns",
            "range": "± 135.14794048014366"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Dapper_LimitOffset",
            "value": 42817.64813232422,
            "unit": "ns",
            "range": "± 170.9923594626489"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.SqlKata_LimitOffset",
            "value": 73717.04239908855,
            "unit": "ns",
            "range": "± 284.38169994247914"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.EfCore_LimitOffset",
            "value": 99021.4619140625,
            "unit": "ns",
            "range": "± 1142.1955012368333"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Raw_SelectAll",
            "value": 191747.23803710938,
            "unit": "ns",
            "range": "± 705.4997767913137"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 202148.8735914964,
            "unit": "ns",
            "range": "± 963.0221436313527"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.SqlKata_SelectAll",
            "value": 208932.51468331474,
            "unit": "ns",
            "range": "± 1237.3928554563481"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Dapper_SelectAll",
            "value": 240396.78414481026,
            "unit": "ns",
            "range": "± 859.2414713652001"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.EfCore_SelectAll",
            "value": 263734.4549967448,
            "unit": "ns",
            "range": "± 957.9460198779263"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Raw_SelectProjection",
            "value": 85347.23552058294,
            "unit": "ns",
            "range": "± 353.01783223716967"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 93267.98951134316,
            "unit": "ns",
            "range": "± 458.0455883407828"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.SqlKata_SelectProjection",
            "value": 103117.81944861778,
            "unit": "ns",
            "range": "± 480.8081769343997"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Dapper_SelectProjection",
            "value": 118045.29809570312,
            "unit": "ns",
            "range": "± 594.7250754643919"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.EfCore_SelectProjection",
            "value": 151317.38333834134,
            "unit": "ns",
            "range": "± 1403.2366650671645"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Raw_Except",
            "value": 89534.04613385882,
            "unit": "ns",
            "range": "± 703.8832550574089"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 95055.51168387277,
            "unit": "ns",
            "range": "± 681.0193032472766"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Dapper_Except",
            "value": 112174.88993617466,
            "unit": "ns",
            "range": "± 915.2479701774711"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.SqlKata_Except",
            "value": 128342.43908691406,
            "unit": "ns",
            "range": "± 730.0680469609198"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.EfCore_Except",
            "value": 187523.87491861978,
            "unit": "ns",
            "range": "± 1872.5001831364098"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Raw_Intersect",
            "value": 119042.25332205636,
            "unit": "ns",
            "range": "± 707.8112296255784"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 123690.71099384014,
            "unit": "ns",
            "range": "± 409.23257675070687"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Dapper_Intersect",
            "value": 139386.97248186384,
            "unit": "ns",
            "range": "± 1021.5936158965176"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.SqlKata_Intersect",
            "value": 151664.58164760045,
            "unit": "ns",
            "range": "± 1402.2145582049916"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.EfCore_Intersect",
            "value": 233999.96041165866,
            "unit": "ns",
            "range": "± 2232.690560095398"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Raw_UnionAll",
            "value": 72864.8512878418,
            "unit": "ns",
            "range": "± 195.06903605495165"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 86212.10086763822,
            "unit": "ns",
            "range": "± 307.243919310575"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Dapper_UnionAll",
            "value": 95005.79515729632,
            "unit": "ns",
            "range": "± 561.4481025391376"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.SqlKata_UnionAll",
            "value": 113763.26896784856,
            "unit": "ns",
            "range": "± 742.8051984808973"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.EfCore_UnionAll",
            "value": 179996.48274739584,
            "unit": "ns",
            "range": "± 3344.8084004290195"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Raw_Contains",
            "value": 33538.746032714844,
            "unit": "ns",
            "range": "± 99.05429741711447"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 34875.99754450871,
            "unit": "ns",
            "range": "± 191.97438935479533"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Dapper_Contains",
            "value": 38505.4674987793,
            "unit": "ns",
            "range": "± 201.33689414326076"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.SqlKata_Contains",
            "value": 86620.42149939903,
            "unit": "ns",
            "range": "± 604.474639494429"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.EfCore_Contains",
            "value": 99187.05149489183,
            "unit": "ns",
            "range": "± 778.0283080800141"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Raw_StartsWith",
            "value": 96307.42983572824,
            "unit": "ns",
            "range": "± 597.901297917728"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 106064.98583984375,
            "unit": "ns",
            "range": "± 924.2089632637859"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Dapper_StartsWith",
            "value": 128345.92816631611,
            "unit": "ns",
            "range": "± 458.18208312635346"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.SqlKata_StartsWith",
            "value": 159655.07080078125,
            "unit": "ns",
            "range": "± 777.3920719353948"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.EfCore_StartsWith",
            "value": 177019.31813401444,
            "unit": "ns",
            "range": "± 896.472303387929"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Raw_CountSubquery",
            "value": 481329.70342548075,
            "unit": "ns",
            "range": "± 2506.1971493853052"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 482417.3046875,
            "unit": "ns",
            "range": "± 1199.9243624658452"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Dapper_CountSubquery",
            "value": 486714.32589285716,
            "unit": "ns",
            "range": "± 3579.424947365446"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.SqlKata_CountSubquery",
            "value": 531033.8613978794,
            "unit": "ns",
            "range": "± 2735.975036383265"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.EfCore_CountSubquery",
            "value": 540618.9317220052,
            "unit": "ns",
            "range": "± 2980.81457447201"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Raw_Exists",
            "value": 318744.62855747767,
            "unit": "ns",
            "range": "± 2690.8992551638626"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 332059.19373497594,
            "unit": "ns",
            "range": "± 1543.5080170478702"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Dapper_Exists",
            "value": 341162.8623046875,
            "unit": "ns",
            "range": "± 1053.8757181620822"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.SqlKata_Exists",
            "value": 377038.44301060267,
            "unit": "ns",
            "range": "± 3672.609257265403"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.EfCore_Exists",
            "value": 399698.2016977164,
            "unit": "ns",
            "range": "± 3405.9077054715813"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Raw_FilteredExists",
            "value": 406471.1265055339,
            "unit": "ns",
            "range": "± 1247.9187978713383"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Dapper_FilteredExists",
            "value": 424600.09333147324,
            "unit": "ns",
            "range": "± 1424.259520069502"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 432206.61560058594,
            "unit": "ns",
            "range": "± 1237.0967736573568"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.SqlKata_FilteredExists",
            "value": 486707.23193359375,
            "unit": "ns",
            "range": "± 3140.277726681662"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.EfCore_FilteredExists",
            "value": 714709.8225661058,
            "unit": "ns",
            "range": "± 7648.726750868437"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Raw_SumSubquery",
            "value": 487563.5860072545,
            "unit": "ns",
            "range": "± 2012.710550378236"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Dapper_SumSubquery",
            "value": 491806.68194110575,
            "unit": "ns",
            "range": "± 1406.3452315579934"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 492065.2410714286,
            "unit": "ns",
            "range": "± 2310.390285307365"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.SqlKata_SumSubquery",
            "value": 539866.2649489183,
            "unit": "ns",
            "range": "± 2314.6311146967837"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.EfCore_SumSubquery",
            "value": 939542.335797991,
            "unit": "ns",
            "range": "± 11383.624388456803"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Raw_Throughput",
            "value": 16457230.55048077,
            "unit": "ns",
            "range": "± 91699.67017832576"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 18746714.39732143,
            "unit": "ns",
            "range": "± 96619.01520451608"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Dapper_Throughput",
            "value": 23232950.51339286,
            "unit": "ns",
            "range": "± 155183.08869561847"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.SqlKata_Throughput",
            "value": 45204491.96875,
            "unit": "ns",
            "range": "± 1391372.8694022128"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.EfCore_Throughput",
            "value": 74215569.50980392,
            "unit": "ns",
            "range": "± 1206476.2630387559"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 39358.53846153846,
            "unit": "ns",
            "range": "± 457.9295097473364"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Raw_UpdateSingleRow",
            "value": 43256.59523809524,
            "unit": "ns",
            "range": "± 1019.6504256244835"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 43560.846153846156,
            "unit": "ns",
            "range": "± 687.2410841126334"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Dapper_UpdateSingleRow",
            "value": 51208.692307692305,
            "unit": "ns",
            "range": "± 532.7866027806668"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.SqlKata_UpdateSingleRow",
            "value": 126384.98,
            "unit": "ns",
            "range": "± 15511.348068710435"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.EfCore_UpdateSingleRow",
            "value": 1025013.2371134021,
            "unit": "ns",
            "range": "± 184665.5128035988"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Dapper_Lag",
            "value": 258802.9287860577,
            "unit": "ns",
            "range": "± 1468.5020191132373"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Raw_Lag",
            "value": 364920.1227213542,
            "unit": "ns",
            "range": "± 1651.5368844324653"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 386904.40880408656,
            "unit": "ns",
            "range": "± 1835.8989415557512"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.SqlKata_Lag",
            "value": 406594.9891826923,
            "unit": "ns",
            "range": "± 2618.415751696775"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.EfCore_Lag",
            "value": 454491.74762834824,
            "unit": "ns",
            "range": "± 7964.868386033421"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Raw_Rank",
            "value": 209675.26908052884,
            "unit": "ns",
            "range": "± 1036.8964671149486"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 228570.87184361048,
            "unit": "ns",
            "range": "± 1760.1560630971192"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Dapper_Rank",
            "value": 241464.44506835938,
            "unit": "ns",
            "range": "± 1452.831773676622"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.SqlKata_Rank",
            "value": 260991.26332310267,
            "unit": "ns",
            "range": "± 3190.606815145235"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.EfCore_Rank",
            "value": 299207.0626502404,
            "unit": "ns",
            "range": "± 2523.6379096530604"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Raw_RowNumber",
            "value": 195641.598050631,
            "unit": "ns",
            "range": "± 692.5530208251471"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 210505.38981745794,
            "unit": "ns",
            "range": "± 821.8790958148879"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Dapper_RowNumber",
            "value": 224503.9249093192,
            "unit": "ns",
            "range": "± 1229.9031745343952"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.SqlKata_RowNumber",
            "value": 242143.1992938702,
            "unit": "ns",
            "range": "± 2025.4078436689003"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.EfCore_RowNumber",
            "value": 274912.46414620534,
            "unit": "ns",
            "range": "± 2837.685858748747"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Dapper_RunningSum",
            "value": 220466.58289513222,
            "unit": "ns",
            "range": "± 1140.8628079998025"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Raw_RunningSum",
            "value": 298756.7595563616,
            "unit": "ns",
            "range": "± 1609.8404139776915"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 313522.0205078125,
            "unit": "ns",
            "range": "± 1536.9986860974127"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.SqlKata_RunningSum",
            "value": 338586.79736328125,
            "unit": "ns",
            "range": "± 5148.074576583367"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.EfCore_RunningSum",
            "value": 375616.29108072916,
            "unit": "ns",
            "range": "± 6938.993292541544"
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
          "id": "1b09c7ad5f9bbdb7ea9b395ba2e9a80851ad933f",
          "message": "Add merged HTML reports, custom dashboard, and run history pages\n\nAdd a Quarry.Benchmarks.Reporter console app that reads BDN combined\nJSON output and emits a single merged HTML report per commit with\nsticky nav, sectioned tables per benchmark class, and Quarry rows\nhighlighted. Run via dotnet run --project to avoid managing build\nlocations.\n\nAdd three front-end pages for the benchmarks gh-pages site:\n- landing.html: top-level entry point with cards linking to dashboard\n  and run history\n- dashboard.html: chart.js trend dashboard with clickable points that\n  navigate to the per-commit report; includes a search filter\n- runs.html: run history table reading runs.json manifest\n\nUpdate the benchmark workflow to filter Quarry-only methods for the\ntrend charts (baselines still run for the per-commit report), generate\nthe merged HTML, then publish the report and front-end pages to the\nQuarry-benchmarks gh-pages branch with a runs.json manifest capped at\n500 entries.",
          "timestamp": "2026-04-11T14:22:46Z",
          "url": "https://github.com/Dtronix/Quarry/commit/1b09c7ad5f9bbdb7ea9b395ba2e9a80851ad933f"
        },
        "date": 1775920461318,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateAvgBenchmarks.Quarry_Avg",
            "value": 18866.248977661133,
            "unit": "ns",
            "range": "± 216.54390552054522"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateCountBenchmarks.Quarry_Count",
            "value": 8003.052810668945,
            "unit": "ns",
            "range": "± 82.72499270474087"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.AggregateSumBenchmarks.Quarry_Sum",
            "value": 18184.19799368722,
            "unit": "ns",
            "range": "± 244.82860862985197"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ColdStartBenchmarks.Quarry_ColdStart",
            "value": 228803.32641601562,
            "unit": "ns",
            "range": "± 870.3296482374267"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexJoinFilterPaginateBenchmarks.Quarry_JoinFilterPaginate",
            "value": 34235.111907958984,
            "unit": "ns",
            "range": "± 228.29285765786983"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ComplexMultiJoinAggregateBenchmarks.Quarry_MultiJoinAggregate",
            "value": 53509.10507710775,
            "unit": "ns",
            "range": "± 106.2352047747996"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ConditionalBranchBenchmarks.Quarry_ConditionalQuery",
            "value": 88505.29325045072,
            "unit": "ns",
            "range": "± 383.092513314654"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteMultiBenchmarks.Quarry_MultiCte",
            "value": 113677.93631685697,
            "unit": "ns",
            "range": "± 498.5656564252742"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteProjectionBenchmarks.Quarry_CteProjection",
            "value": 108809.4420259916,
            "unit": "ns",
            "range": "± 528.8143837535217"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.CteSimpleBenchmarks.Quarry_SimpleCte",
            "value": 112261.31313852164,
            "unit": "ns",
            "range": "± 630.5308686764331"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow_Inlined",
            "value": 44609.76666666667,
            "unit": "ns",
            "range": "± 809.4153504374682"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.DeleteBenchmarks.Quarry_DeleteSingleRow",
            "value": 48555.153846153844,
            "unit": "ns",
            "range": "± 291.8837799975206"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereActiveBenchmarks.Quarry_WhereActive",
            "value": 191629.242640904,
            "unit": "ns",
            "range": "± 1488.670239991805"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById",
            "value": 15994.12693132673,
            "unit": "ns",
            "range": "± 149.12566112210055"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereByIdBenchmarks.Quarry_WhereById_Parameterized",
            "value": 17419.899614606584,
            "unit": "ns",
            "range": "± 197.3467469061712"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.FilterWhereCompoundBenchmarks.Quarry_WhereCompound",
            "value": 83843.67783900669,
            "unit": "ns",
            "range": "± 451.0669361352974"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertBatchBenchmarks.Quarry_BatchInsert10",
            "value": 121197.30769230769,
            "unit": "ns",
            "range": "± 688.9585600280307"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.InsertSingleBenchmarks.Quarry_SingleInsert",
            "value": 52842.153846153844,
            "unit": "ns",
            "range": "± 791.5645737139671"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinInnerBenchmarks.Quarry_InnerJoin",
            "value": 143696.6256452288,
            "unit": "ns",
            "range": "± 840.4763737248416"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.JoinThreeTableBenchmarks.Quarry_ThreeTableJoin",
            "value": 400375.01817908656,
            "unit": "ns",
            "range": "± 2157.6239568055294"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationFirstPageBenchmarks.Quarry_FirstPage",
            "value": 35249.72131817158,
            "unit": "ns",
            "range": "± 270.6340056604699"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.PaginationLimitOffsetBenchmarks.Quarry_LimitOffset",
            "value": 36583.609605055586,
            "unit": "ns",
            "range": "± 274.5205923897452"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectAllBenchmarks.Quarry_SelectAll",
            "value": 200029.21597726006,
            "unit": "ns",
            "range": "± 1466.687778130299"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SelectProjectionBenchmarks.Quarry_SelectProjection",
            "value": 93139.17651367188,
            "unit": "ns",
            "range": "± 497.07469230767526"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetExceptBenchmarks.Quarry_Except",
            "value": 95625.73016357422,
            "unit": "ns",
            "range": "± 733.0642115417005"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetIntersectBenchmarks.Quarry_Intersect",
            "value": 127716.09713040866,
            "unit": "ns",
            "range": "± 1393.136719509492"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SetUnionAllBenchmarks.Quarry_UnionAll",
            "value": 78446.59946986607,
            "unit": "ns",
            "range": "± 544.2556785532308"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringContainsBenchmarks.Quarry_Contains",
            "value": 35351.30487060547,
            "unit": "ns",
            "range": "± 238.5441446309579"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.StringStartsWithBenchmarks.Quarry_StartsWith",
            "value": 102216.79989858773,
            "unit": "ns",
            "range": "± 376.7039679889254"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryCountBenchmarks.Quarry_CountSubquery",
            "value": 484700.528390067,
            "unit": "ns",
            "range": "± 3449.456652313811"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryExistsBenchmarks.Quarry_Exists",
            "value": 336759.5011268029,
            "unit": "ns",
            "range": "± 952.0101130013414"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubqueryFilteredExistsBenchmarks.Quarry_FilteredExists",
            "value": 420959.9501953125,
            "unit": "ns",
            "range": "± 1207.9821109743193"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.SubquerySumBenchmarks.Quarry_SumSubquery",
            "value": 489032.98497596156,
            "unit": "ns",
            "range": "± 2326.5242843563806"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.ThroughputBenchmarks.Quarry_Throughput",
            "value": 18626135.2421875,
            "unit": "ns",
            "range": "± 60186.73665129589"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow_Inlined",
            "value": 38582.416666666664,
            "unit": "ns",
            "range": "± 484.79038738094806"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.UpdateBenchmarks.Quarry_UpdateSingleRow",
            "value": 42508.666666666664,
            "unit": "ns",
            "range": "± 485.6887018981553"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowLagBenchmarks.Quarry_Lag",
            "value": 369796.4074894832,
            "unit": "ns",
            "range": "± 996.5243929617685"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRankBenchmarks.Quarry_Rank",
            "value": 225362.06524188703,
            "unit": "ns",
            "range": "± 790.0447746249738"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRowNumberBenchmarks.Quarry_RowNumber",
            "value": 213013.97006460337,
            "unit": "ns",
            "range": "± 1163.8019284193115"
          },
          {
            "name": "Quarry.Benchmarks.Benchmarks.WindowRunningSumBenchmarks.Quarry_RunningSum",
            "value": 304390.2733623798,
            "unit": "ns",
            "range": "± 938.7231335746205"
          }
        ]
      }
    ]
  }
}