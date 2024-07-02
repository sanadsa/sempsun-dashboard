//
//  SEMAI2_0App.swift
//  SEMAI2.0
//
//  Created by Ibrahim on 2024-06-18.
//

import SwiftUI

@main
struct SEMAI2_0App: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
