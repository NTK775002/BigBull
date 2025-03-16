"use client"

import {
  BarChart3,
  Briefcase,
  CreditCard,
  DollarSign,
  History,
  LineChart,
  PieChart,
  Settings,
  Shield,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6" />
          <span className="font-bold">InvestPro</span>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="#" className="font-medium">
            Dashboard
          </Link>
          <Link href="#" className="text-muted-foreground">
            Portfolio
          </Link>
          <Link href="#" className="text-muted-foreground">
            Trade
          </Link>
          <Link href="#" className="text-muted-foreground">
            Insights
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </header>
      <div className="grid flex-1 md:grid-cols-[220px_1fr]">
        <aside className="hidden border-r md:block">
          <nav className="grid items-start gap-2 p-4">
            {[
              { title: "Overview", href: "#", icon: BarChart3 },
              { title: "Portfolio", href: "#", icon: Briefcase },
              { title: "Stocks", href: "#", icon: TrendingUp },
              { title: "Bonds", href: "#", icon: DollarSign },
              { title: "Insurance", href: "#", icon: Shield },
              { title: "Transactions", href: "#", icon: History },
              { title: "Reports", href: "#", icon: PieChart },
              { title: "Market Analysis", href: "#", icon: LineChart },
              { title: "Payments", href: "#", icon: CreditCard },
              { title: "Settings", href: "#", icon: Settings },
            ].map((item) => (
              <Link key={item.title} href={item.href}>
                <Button variant={item.title === "Overview" ? "secondary" : "ghost"} className="w-full justify-start">
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Button>
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 overflow-x-hidden p-6 pt-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500">+20.1%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Stocks Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$28,566.00</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500">+15.3%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Bonds Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,543.54</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500">+7.2%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Insurance Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$4,122.35</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-red-500">-3.1%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Portfolio Overview</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <div className="text-muted-foreground">Portfolio chart would appear here</div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Market Overview</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <div className="text-muted-foreground">Market data would appear here</div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Your recent investment activities</CardDescription>
                </CardHeader>
                <CardContent className="h-[200px] flex items-center justify-center">
                  <div className="text-muted-foreground">Transaction history would appear here</div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Investment Suggestions</CardTitle>
                  <CardDescription>Based on your risk profile and market trends</CardDescription>
                </CardHeader>
                <CardContent className="h-[200px] flex items-center justify-center">
                  <div className="text-muted-foreground">Investment suggestions would appear here</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

