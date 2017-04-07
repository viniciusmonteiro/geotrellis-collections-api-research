package com.example.app

import org.scalatra.test.specs2._

// For more on Specs2, see http://etorreborre.github.com/specs2/guide/org.specs2.guide.QuickStart.html
class GeoTrellisAPIServletSpec extends ScalatraSpec { def is =
  "GET / on GeoTrellisAPIServlet"                     ^
    "should return status 200"                  ! root200^
                                                end

  addServlet(classOf[GeoTrellisAPIServlet], "/*")

  def root200 = get("/") {
    status must_== 200
  }
}
